import { Args, Query, Resolver } from "@nestjs/graphql";
import { BandsService } from "./bands.service";

@Resolver('Bands')
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
}