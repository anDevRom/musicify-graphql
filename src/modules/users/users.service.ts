import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { lastValueFrom, map } from "rxjs";
import { CreateUserInput, CredentialsInput, TokenJwt, User } from "src/graphql";

@Injectable()
export class UsersService {
  constructor(private httpService: HttpService) {}

  async findOne(id: string): Promise<User> {
    const user = this.httpService
      .get(`${process.env.USERS_API}/${id}`)
      .pipe(map(({data}) => data));

    return await lastValueFrom(user);
  }

  async create(body: CreateUserInput): Promise<User> {
    const response = this.httpService
      .post(
        `${process.env.USERS_API}/register`,
        body
      )
      .pipe(map(({data}) => data));

    return await lastValueFrom(response);  
  }

  async getJwt(creds: CredentialsInput): Promise<TokenJwt> {
    const jwt = this.httpService
      .post(
        `${process.env.USERS_API}/login`,
        creds
      )
      .pipe(map(({data}) => data));

    return await lastValueFrom(jwt);
  }
}