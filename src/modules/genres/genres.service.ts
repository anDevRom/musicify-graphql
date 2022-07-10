import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import {
  CreateGenreInput,
  EntityDelete,
  Genre,
  GenresCollection,
  UpdateGenreInput,
} from 'src/graphql';
import { createAxiosConfigWithToken, createPaginationQuery } from 'src/utils';

@Injectable()
export class GenresService {
  constructor(private httpService: HttpService) {}

  async findOne(id: string): Promise<Genre> {
    const genre = this.httpService
      .get(`${process.env.GENRES_API}/${id}`)
      .pipe(map(({ data }) => data));

    return await lastValueFrom(genre);
  }

  async findAll(limit: number, offset: number): Promise<GenresCollection> {
    const genres = this.httpService
      .get(process.env.GENRES_API + createPaginationQuery(limit, offset))
      .pipe(map(({ data }) => data));

    return await lastValueFrom(genres);
  }

  async create(body: CreateGenreInput, token: string): Promise<Genre> {
    const genre = this.httpService
      .post(process.env.GENRES_API, body, createAxiosConfigWithToken(token))
      .pipe(map(({ data }) => data));

    return await lastValueFrom(genre);
  }

  async update(
    id: string,
    body: UpdateGenreInput,
    token: string,
  ): Promise<Genre> {
    const genre = this.httpService
      .put(
        `${process.env.GENRES_API}/${id}`,
        body,
        createAxiosConfigWithToken(token),
      )
      .pipe(map(({ data }) => data));

    return await lastValueFrom(genre);
  }

  async delete(id: string, token: string): Promise<EntityDelete> {
    const result = this.httpService
      .delete(
        `${process.env.GENRES_API}/${id}`,
        createAxiosConfigWithToken(token),
      )
      .pipe(map(({ data }) => data));

    return await lastValueFrom(result);
  }
}
