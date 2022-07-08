import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { lastValueFrom, map } from "rxjs";
import { Artist, Band, EntityDelete, Genre, Track, TrackInput, TracksCollection } from "src/graphql";
import { modifyCollectionEntitiesIds, modifyEntityId, createAxiosConfigWithToken } from "src/utils";
import { ArtistsService } from "../artists/artists.service";
import { BandsService } from "../bands/bands.service";
import { GenresService } from "../genres/genres.service";

@Injectable()
export class TracksService {
  constructor(
    private httpService: HttpService,
    private artistsService: ArtistsService,
    private bandsService: BandsService,
    private genresService: GenresService
  ) {}

  async findOne(id: string): Promise<Track> {
    const track = this.httpService
      .get(`${process.env.TRACKS_API}/${id}`)
      .pipe(map(({ data }) => modifyEntityId<Track>(data)));

    return await lastValueFrom(track);  
  }

  async findAll(): Promise<TracksCollection> {
    const tracks = this.httpService
      .get(process.env.TRACKS_API)
      .pipe(map(({ data }) => modifyCollectionEntitiesIds<Track>(data)));

    return await lastValueFrom(tracks);  
  }

  async getArtists(ids: string[]): Promise<Artist[]> {
    return await Promise.all(
      ids.map(id => this.artistsService.findOne(id))
    );
  }

  async getBands(ids: string[]): Promise<Band[]> {
    return await Promise.all(
      ids.map(id => this.bandsService.findOne(id))
    );
  }

  async getGenres(ids: string[]): Promise<Genre[]> {
    return await Promise.all(
      ids.map(id => this.genresService.findOne(id))
    );
  }

  async create(body: TrackInput, token: string): Promise<Track> {
    const track = this.httpService
      .post(
        process.env.TRACKS_API,
        body,
        createAxiosConfigWithToken(token)
      )
      .pipe(map(({ data }) => modifyEntityId<Track>(data)));

    return await lastValueFrom(track);
  }

  async update(id: string, body: TrackInput, token: string): Promise<Track> {
    const track = this.httpService
      .put(
        `${process.env.TRACKS_API}/${id}`,
        body,
        createAxiosConfigWithToken(token)
      )
      .pipe(map(({ data }) => modifyEntityId<Track>(data)));

    return await lastValueFrom(track);
  }

  async delete(id: string, token: string): Promise<EntityDelete> {
    const result = this.httpService
      .delete(
        `${process.env.GENRES_API}/${id}`,
        createAxiosConfigWithToken(token)
      )
      .pipe(map(({ data }) => data));

    return await lastValueFrom(result);  
  }
}