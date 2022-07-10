import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { CredentialsInput, UserInput } from "src/graphql";
import { UsersService } from "./users.service";

@Resolver('User')
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query()
  async user(@Args('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Query()
  async jwt(@Args('creds') creds: CredentialsInput) {
    return this.usersService.getJwt(creds);
  }

  @Mutation()
  async register(@Args('body') body: UserInput) {
    return this.usersService.create(body);
  }
}