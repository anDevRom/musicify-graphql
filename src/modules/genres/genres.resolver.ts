import { Args, Query, Resolver } from "@nestjs/graphql";
import { GenresService } from "./genres.service";

@Resolver('Genres')
export class GenresResolver {
  constructor(
    private genresService: GenresService
  ) {}

  @Query()
  async genre(@Args('id') id: string) {
    return this.genresService.findOne(id);
  }

  @Query()
  async genres() {
    return this.genresService.findAll();
  }
}