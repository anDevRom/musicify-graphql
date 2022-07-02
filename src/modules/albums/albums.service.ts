import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { map } from "rxjs";

@Injectable()
export class AlbumsService {
  constructor(private httpService: HttpService) {}

  findAll() {
    return this.httpService.get(process.env.ALBUMS_API).pipe(map(({data}) => data.items));
  }
}