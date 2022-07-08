import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { UsersService } from "./users.service";

@Resolver('User')
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Mutation()
  async register(@Args('body') body) {
    return this.usersService.register(body);
  }
}