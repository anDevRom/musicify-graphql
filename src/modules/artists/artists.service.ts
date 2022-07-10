import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { lastValueFrom, map } from "rxjs";
import { Artist, ArtistInput, ArtistsCollection, Band, EntityDelete } from "src/graphql";
import { modifyCollectionEntitiesIds, modifyEntityId, createAxiosConfigWithToken, createPaginationQuery } from "src/utils";
import { BandsService } from "../bands/bands.service";

@Injectable()
export class ArtistsService {
  constructor(
    private httpService: HttpService,
    private bandsService: BandsService
  ) {}

  async findOne(id: string): Promise<Artist> {
    const artist = this.httpService
      .get(`${process.env.ARTISTS_API}/${id}`)
      .pipe(map(({ data }) => modifyEntityId<Artist>(data)));

    return await lastValueFrom(artist);  
  }

  async findAll(limit: number, offset: number): Promise<ArtistsCollection> {
    const artists = this.httpService
      .get(process.env.ARTISTS_API + createPaginationQuery(limit, offset))
      .pipe(map(({ data }) => modifyCollectionEntitiesIds<Artist>(data)));

    return await lastValueFrom(artists);  
  }

  async getBands(ids: string[]): Promise<Band[]> {
    return await Promise.all(
      ids.map(id => this.bandsService.findOne(id))
    );
  }

  async create(body: ArtistInput, token: string): Promise<Artist> {
    const artist = this.httpService
      .post(
        process.env.ARTISTS_API,
        body,
        createAxiosConfigWithToken(token)
      )
      .pipe(map(({ data }) => modifyEntityId<Artist>(data)));

    return await lastValueFrom(artist);
  }

  async update(id: string, body: ArtistInput, token: string): Promise<Artist> {
    const artist = this.httpService
      .put(
        `${process.env.ARTISTS_API}/${id}`,
        body,
        createAxiosConfigWithToken(token)
      )
      .pipe(map(({ data }) => modifyEntityId<Artist>(data)));

    return await lastValueFrom(artist);
  }

  async delete(id: string, token: string): Promise<EntityDelete> {
    const result = this.httpService
      .delete(
        `${process.env.ARTISTS_API}/${id}`,
        createAxiosConfigWithToken(token)
      )
      .pipe(map(({ data }) => data));

    return await lastValueFrom(result);  
  }
}