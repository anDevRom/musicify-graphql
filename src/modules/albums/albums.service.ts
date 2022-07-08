import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { lastValueFrom, map } from "rxjs";
import { Album, AlbumInput, AlbumsCollection, Band, EntityDelete, Genre, Track } from "src/graphql";
import { createAxiosConfigWithToken, modifyCollectionEntitiesIds, modifyEntityId } from "src/utils";
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

  async create(body: AlbumInput, token: string): Promise<Album> {
    const album = this.httpService
      .post(
        process.env.ALBUMS_API,
        body,
        createAxiosConfigWithToken(token)
      )
      .pipe(map(({ data }) => modifyEntityId<Album>(data)));

    return await lastValueFrom(album);
  }

  async update(id: string, body: AlbumInput, token: string): Promise<Album> {
    const album = this.httpService
      .put(
        `${process.env.ALBUMS_API}/${id}`,
        body,
        createAxiosConfigWithToken(token)
      )
      .pipe(map(({ data }) => modifyEntityId<Album>(data)));

    return await lastValueFrom(album);
  }

  async delete(id: string, token: string): Promise<EntityDelete> {
    const result = this.httpService
      .delete(
        `${process.env.ALBUMS_API}/${id}`,
        createAxiosConfigWithToken(token)
      )
      .pipe(map(({ data }) => data));

    return await lastValueFrom(result);  
  }
}