import { HttpService } from "@nestjs/axios"; 
import { Injectable } from "@nestjs/common";
import { lastValueFrom, map } from "rxjs";
import { Genre, GenresCollection } from "src/graphql";
import { modifyCollectionEntitiesIds, modifyEntityId } from "src/utils";

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
}