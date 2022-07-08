import { Args, Context, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { ArtistInput, TokenContext } from "src/graphql";
import { ArtistsService } from "./artists.service";

@Resolver('Artist')
export class ArtistsResolver {
  constructor(
    private artistsService: ArtistsService
  ) {}

  @Query()
  async artist(@Args('id') id: string) {
    return this.artistsService.findOne(id);
  }

  @Query()
  async artists() {
    return this.artistsService.findAll();
  }

  @ResolveField()
  async bands(@Parent() artist: ArtistInput) {
    return this.artistsService.getBands(artist.bandsIds);
  }

  @Mutation()
  async createArtist(
    @Args('body') body: ArtistInput, 
    @Context() context: TokenContext
  ) {
    return this.artistsService.create(body, context.token);
  }

  @Mutation()
  async updateArtist(
    @Args('id') id: string, 
    @Args('body') body: ArtistInput, 
    @Context() context: TokenContext
  ) {
    return this.artistsService.update(id, body, context.token);
  }

  @Mutation()
  async deleteArtist(
    @Args('id') id: string, 
    @Context() context: TokenContext
  ) {
    return this.artistsService.delete(id, context.token);
  }
}