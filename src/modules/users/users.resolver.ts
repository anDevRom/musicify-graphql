import { Args, Mutation, Resolver, Query, ResolveField, Parent } from "@nestjs/graphql";
import { CreateUserInput, CredentialsInput, UserInput } from "src/graphql";
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

  @ResolveField()
  id(@Parent() user: UserInput) {
    return user._id;
  }

  @Mutation()
  async register(@Args('body') body: CreateUserInput) {
    return this.usersService.create(body);
  }
}