import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { Artist, Band, Favourites, Genre, Track } from "src/graphql";
import { createAxiosConfigWithToken } from "src/utils";
import { lastValueFrom, map } from "rxjs";
import { TracksService } from "../tracks/tracks.service";
import { BandsService } from "../bands/bands.service";
import { ArtistsService } from "../artists/artists.service";
import { GenresService } from "../genres/genres.service";

@Injectable()
export class FavouritesService {
  constructor(
    private httpService: HttpService,
    private tracksService: TracksService,
    private bandsService: BandsService,
    private artistsService: ArtistsService,
    private genresService: GenresService
  ) {}

  async findAll(token: string): Promise<Favourites> {
    const favourites = this.httpService
      .get(
        process.env.FAVOURITES_API,
        createAxiosConfigWithToken(token)
      )
      .pipe(map(({ data }) => data));

    return await lastValueFrom(favourites);  
  }

  async getTracks(ids: string[]): Promise<Track[]> {
    return await Promise.all(
      ids.map(id => this.tracksService.findOne(id))
    );
  }

  async getBands(ids: string[]): Promise<Band[]> {
    return await Promise.all(
      ids.map(id => this.bandsService.findOne(id))
    );
  }

  async getArtists(ids: string[]): Promise<Artist[]> {
    return await Promise.all(
      ids.map(id => this.artistsService.findOne(id))
    );
  }

  async getGenres(ids: string[]): Promise<Genre[]> {
    return await Promise.all(
      ids.map(id => this.genresService.findOne(id))
    );
  }

  async add(type: string, id: string, token: string): Promise<Favourites> {
    const favourites = this.httpService
      .put(
        `${process.env.FAVOURITES_API}/add`,
        { type, id },
        createAxiosConfigWithToken(token)
      )
      .pipe(map(({ data }) => data));

    return await lastValueFrom(favourites);
  }
}