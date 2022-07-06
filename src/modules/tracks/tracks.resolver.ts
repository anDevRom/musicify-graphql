import { Args, Query, Resolver } from "@nestjs/graphql";
import { TracksService } from "./tracks.service";

@Resolver('Tracks')
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
}