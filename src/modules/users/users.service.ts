import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { Mutation } from "@nestjs/graphql";
import { lastValueFrom, map } from "rxjs";
import { UserInput } from "src/graphql";

@Injectable()
export class UsersService {
  constructor(private httpService: HttpService) {}

  @Mutation()
  async register(body: UserInput) {
    const response = this.httpService
      .post(
        `${process.env.USERS_API}/register`,
        { data: body }
      )
      .pipe(map(({data}) => data));

    return await lastValueFrom(response);  
  }
}