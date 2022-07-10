import { Args, Context, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { CreateTrackInput, TokenContext, TrackInput, UpdateTrackInput } from "src/graphql";
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
  async tracks(
    @Args('limit') limit: number, 
    @Args('offset') offset: number
  ) {
    return this.tracksService.findAll(limit, offset);
  }

  @ResolveField()
  id(@Parent() track: TrackInput) {
    return track._id;
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

  @Mutation()
  async createTrack(
    @Args('body') body: CreateTrackInput, 
    @Context() context: TokenContext
  ) {
    return this.tracksService.create(body, context.token);
  }

  @Mutation()
  async updateTrack(
    @Args('id') id: string, 
    @Args('body') body: UpdateTrackInput, 
    @Context() context: TokenContext
  ) {
    return this.tracksService.update(id, body, context.token);
  }

  @Mutation()
  async deleteTrack(
    @Args('id') id: string, 
    @Context() context: TokenContext
  ) {
    return this.tracksService.delete(id, context.token);
  }
}