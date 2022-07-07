import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { BandInput } from "src/graphql";
import { BandsService } from "./bands.service";

@Resolver('Band')
export class BandsResolver {
  constructor(
    private bandsService: BandsService
  ) {}

  @Query()
  async band(@Args('id') id: string) {
    return this.bandsService.findOne(id);
  }

  @Query()
  async bands() {
    return this.bandsService.findAll();
  }

  @ResolveField()
  async genres(@Parent() band: BandInput) {
    return this.bandsService.getGenres(band.genresIds);
  }
}