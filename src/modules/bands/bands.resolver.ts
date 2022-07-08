import { Args, Context, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { BandInput, TokenContext } from "src/graphql";
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

  @Mutation()
  async createBand(
    @Args('body') body: BandInput, 
    @Context() context: TokenContext
  ) {
    return this.bandsService.create(body, context.token);
  }

  @Mutation()
  async updateBand(
    @Args('id') id: string, 
    @Args('body') body: BandInput, 
    @Context() context: TokenContext
  ) {
    return this.bandsService.update(id, body, context.token);
  }

  @Mutation()
  async deleteBand(
    @Args('id') id: string, 
    @Context() context: TokenContext
  ) {
    return this.bandsService.delete(id, context.token);
  }
}