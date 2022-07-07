import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { lastValueFrom, map } from "rxjs";
import { Artist, ArtistsCollection, Band } from "src/graphql";
import { modifyCollectionEntitiesIds, modifyEntityId } from "src/utils";
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

  async findAll(): Promise<ArtistsCollection> {
    const artists = this.httpService
      .get(process.env.ARTISTS_API)
      .pipe(map(({ data }) => modifyCollectionEntitiesIds<Artist>(data)));

    return await lastValueFrom(artists);  
  }

  async getBands(ids: string[]): Promise<Band[]> {
    return await Promise.all(
      ids.map(id => this.bandsService.findOne(id))
    );
  }
}