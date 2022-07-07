import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { lastValueFrom, map } from "rxjs";
import { Album, AlbumsCollection, Band, Genre, Track } from "src/graphql";
import { modifyCollectionEntitiesIds, modifyEntityId } from "src/utils";
import { BandsService } from "../bands/bands.service";
import { GenresService } from "../genres/genres.service";
import { TracksService } from "../tracks/tracks.service";

@Injectable()
export class AlbumsService {
  constructor(
    private httpService: HttpService,
    private bandsService: BandsService,
    private genresService: GenresService,
    private tracksService: TracksService  
  ) {}

  async findOne(id: string): Promise<Album> {
    const album = this.httpService
      .get(`${process.env.ALBUMS_API}/${id}`)
      .pipe(map(({ data }) => modifyEntityId<Album>(data)));

    return await lastValueFrom(album);  
  }

  async findAll(): Promise<AlbumsCollection> {
    const albums = this.httpService
      .get(process.env.ALBUMS_API)
      .pipe(map(({ data }) => modifyCollectionEntitiesIds<Album>(data)));

    return await lastValueFrom(albums);  
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

  async getTracks(ids: string[]): Promise<Track[]> {
    return await Promise.all(
      ids.map(id => this.tracksService.findOne(id))
    );
  }
}