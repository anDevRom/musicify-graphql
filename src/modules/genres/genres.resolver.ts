import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";
import { GenreInput, TokenContext } from "src/graphql";
import { GenresService } from "./genres.service";

@Resolver('Genre')
export class GenresResolver {
  constructor(
    private genresService: GenresService
  ) {}

  @Query()
  async genre(@Args('id') id: string) {
    return this.genresService.findOne(id);
  }

  @Query()
  async genres(
    @Args('limit') limit: number, 
    @Args('offset') offset: number
  ) {
    return this.genresService.findAll(limit, offset);
  }

  @Mutation()
  async createGenre(
    @Args('body') body: GenreInput, 
    @Context() context: TokenContext
  ) {
    return this.genresService.create(body, context.token);
  }

  @Mutation()
  async updateGenre(
    @Args('id') id: string, 
    @Args('body') body: GenreInput, 
    @Context() context: TokenContext
  ) {
    return this.genresService.update(id, body, context.token);
  }

  @Mutation()
  async deleteGenre(
    @Args('id') id: string, 
    @Context() context: TokenContext
  ) {
    return this.genresService.delete(id, context.token);
  }
}