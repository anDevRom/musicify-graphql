import { Args, Context, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { ArtistInput, CreateArtistInput, TokenContext, UpdateArtistInput } from "src/graphql";
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
  async artists(
    @Args('limit') limit: number, 
    @Args('offset') offset: number
  ) {
    return this.artistsService.findAll(limit, offset);
  }

  @ResolveField()
  id(@Parent() artist: ArtistInput) {
    return artist._id;
  }

  @ResolveField()
  async bands(@Parent() artist: ArtistInput) {
    return this.artistsService.getBands(artist.bandsIds);
  }

  @Mutation()
  async createArtist(
    @Args('body') body: CreateArtistInput, 
    @Context() context: TokenContext
  ) {
    return this.artistsService.create(body, context.token);
  }

  @Mutation()
  async updateArtist(
    @Args('id') id: string, 
    @Args('body') body: UpdateArtistInput, 
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