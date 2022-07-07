import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { ArtistInput } from "src/graphql";
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
}