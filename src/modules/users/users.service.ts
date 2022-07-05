import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { map } from "rxjs";
import { UserRegister } from "src/graphql";

@Injectable()
export class UsersService {
  constructor(private httpService: HttpService) {}

  register(body: UserRegister) {
    return this.httpService
      .post(`${process.env.USERS_API}/register`, body)
      .pipe(map(({data}) => data));
  }
}