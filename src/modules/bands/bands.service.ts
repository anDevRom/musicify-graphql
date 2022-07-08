import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { lastValueFrom, map } from "rxjs";
import { Band, BandInput, BandsCollection, EntityDelete, Genre } from "src/graphql";
import { modifyCollectionEntitiesIds, modifyEntityId, createAxiosConfigWithToken } from "src/utils";
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

  async create(body: BandInput, token: string): Promise<Band> {
    const band = this.httpService
      .post(
        process.env.BANDS_API,
        body,
        createAxiosConfigWithToken(token)
      )
      .pipe(map(({ data }) => modifyEntityId<Band>(data)));

    return await lastValueFrom(band);
  }

  async update(id: string, body: BandInput, token: string): Promise<Band> {
    const band = this.httpService
      .put(
        `${process.env.BANDS_API}/${id}`,
        body,
        createAxiosConfigWithToken(token)
      )
      .pipe(map(({ data }) => modifyEntityId<Band>(data)));

    return await lastValueFrom(band);
  }

  async delete(id: string, token: string): Promise<EntityDelete> {
    const result = this.httpService
      .delete(
        `${process.env.BANDS_API}/${id}`,
        createAxiosConfigWithToken(token)
      )
      .pipe(map(({ data }) => data));

    return await lastValueFrom(result);  
  }
}