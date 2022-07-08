import { HttpService } from "@nestjs/axios"; 
import { Injectable } from "@nestjs/common";
import { lastValueFrom, map } from "rxjs";
import { EntityDelete, Genre, GenreInput, GenresCollection } from "src/graphql";
import { modifyCollectionEntitiesIds, modifyEntityId, createAxiosConfigWithToken } from "src/utils";

@Injectable()
export class GenresService {
  constructor(
    private httpService: HttpService
  ) {}

  async findOne(id: string): Promise<Genre> {
    const genre = this.httpService
      .get(`${process.env.GENRES_API}/${id}`)
      .pipe(map(({ data }) => modifyEntityId<Genre>(data)));

    return await lastValueFrom(genre);  
  }

  async findAll(): Promise<GenresCollection> {
    const genres = this.httpService
      .get(process.env.GENRES_API)
      .pipe(map(({ data }) => modifyCollectionEntitiesIds<Genre>(data)));

    return await lastValueFrom(genres);  
  }

  async create(body: GenreInput, token: string): Promise<Genre> {
    const genre = this.httpService
      .post(
        process.env.GENRES_API,
        body,
        createAxiosConfigWithToken(token)
      )
      .pipe(map(({ data }) => modifyEntityId<Genre>(data)));

    return await lastValueFrom(genre);
  }

  async update(id: string, body: GenreInput, token: string): Promise<Genre> {
    const genre = this.httpService
      .put(
        `${process.env.GENRES_API}/${id}`,
        body,
        createAxiosConfigWithToken(token)
      )
      .pipe(map(({ data }) => modifyEntityId<Genre>(data)));

    return await lastValueFrom(genre);
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