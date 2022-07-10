import { HttpService } from "@nestjs/axios";
import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { lastValueFrom, map } from "rxjs";
import { Artist, Band, BandsCollection, CreateBandInput, EntityDelete, Genre, Member, MemberInput, UpdateBandInput } from "src/graphql";
import { createAxiosConfigWithToken, createPaginationQuery } from "src/utils";
import { ArtistsService } from "../artists/artists.service";
import { GenresService } from "../genres/genres.service";

@Injectable()
export class BandsService {
  constructor(
    private httpService: HttpService,
    private genresService: GenresService,
    @Inject(forwardRef(() => ArtistsService))
    private artistsService: ArtistsService,
  ) {}

  async findOne(id: string): Promise<Band> {
    const band = this.httpService
      .get(`${process.env.BANDS_API}/${id}`)
      .pipe(map(({ data }) => data));

    return await lastValueFrom(band);  
  }

  async findAll(limit: number, offset: number): Promise<BandsCollection> {
    const bands = this.httpService
      .get(process.env.BANDS_API + createPaginationQuery(limit, offset))
      .pipe(map(({ data }) => data));

    return await lastValueFrom(bands);  
  }

  async getMembers(rawMembers: MemberInput[]): Promise<Member[]> {
    const members: Artist[] = await Promise.all(
      rawMembers.map(
        member => this.artistsService.findOne(member.artist)
      )
    );

    return members.map((member, idx) => {
      return {
        id: member.id,
        firstName: member.firstName,
        secondName: member.secondName,
        middleName: member.middleName,
        instrument: rawMembers[idx].instrument,
        years: rawMembers[idx].years
      };
    });
  }

  async getGenres(ids: string[]): Promise<Genre[]> {
    return await Promise.all(
      ids.map(id => this.genresService.findOne(id))
    );
  }

  async create(body: CreateBandInput, token: string): Promise<Band> {
    const band = this.httpService
      .post(
        process.env.BANDS_API,
        body,
        createAxiosConfigWithToken(token)
      )
      .pipe(map(({ data }) => data));

    return await lastValueFrom(band);
  }

  async update(id: string, body: UpdateBandInput, token: string): Promise<Band> {
    const band = this.httpService
      .put(
        `${process.env.BANDS_API}/${id}`,
        body,
        createAxiosConfigWithToken(token)
      )
      .pipe(map(({ data }) => data));

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