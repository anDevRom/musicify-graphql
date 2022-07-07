import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { lastValueFrom, map } from "rxjs";
import { Band, BandsCollection, Genre } from "src/graphql";
import { modifyCollectionEntitiesIds, modifyEntityId } from "src/utils";
import { GenresService } from "../genres/genres.service";

@Injectable()
export class BandsService {
  constructor(
    private httpService: HttpService,
    private genresService: GenresService
  ) {}

  async findOne(id: string): Promise<Band> {
    const band = this.httpService
      .get(`${process.env.BANDS_API}/${id}`)
      .pipe(map(({ data }) => modifyEntityId<Band>(data)));

    return await lastValueFrom(band);  
  }

  async findAll(): Promise<BandsCollection> {
    const bands = this.httpService
      .get(process.env.BANDS_API)
      .pipe(map(({ data }) => modifyCollectionEntitiesIds<Band>(data)));

    return await lastValueFrom(bands);  
  }

  async getGenres(ids: string[]): Promise<Genre[]> {
    return await Promise.all(
      ids.map(id => this.genresService.findOne(id))
    );
  }
}