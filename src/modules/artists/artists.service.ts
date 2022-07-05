import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { map } from "rxjs";

@Injectable()
export class ArtistsService {
  constructor(
    private httpService: HttpService
  ) {}

  findOne(id: string) {
    return this.httpService
      .get(`${process.env.ARTISTS_API}/${id}`)
      .pipe(map(({data}) => data));
  }

  findAll() {
    return this.httpService
      .get(process.env.ARTISTS_API)
      .pipe(map(({ data }) => data.items));
  }
}