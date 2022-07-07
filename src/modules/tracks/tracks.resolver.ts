import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { TrackInput } from "src/graphql";
import { TracksService } from "./tracks.service";

@Resolver('Track')
export class TracksResolver {
  constructor(
    private tracksService: TracksService
  ) {}

  @Query()
  async track(@Args('id') id: string) {
    return this.tracksService.findOne(id);
  }

  @Query()
  async tracks() {
    return this.tracksService.findAll();
  }

  @ResolveField()
  async artists(@Parent() track: TrackInput) {
    return this.tracksService.getArtists(track.artistsIds);
  }

  @ResolveField()
  async bands(@Parent() track: TrackInput) {
    return this.tracksService.getBands(track.bandsIds);
  }

  @ResolveField()
  async genres(@Parent() track: TrackInput) {
    return this.tracksService.getGenres(track.genresIds);
  }
}