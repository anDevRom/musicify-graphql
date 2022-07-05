import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { UserRegister } from "src/graphql";
import { UsersService } from "./users.service";

@Resolver('Users')
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Mutation()
  async register(@Args('body') body: UserRegister) {
    return this.usersService.register(body);
  }
}