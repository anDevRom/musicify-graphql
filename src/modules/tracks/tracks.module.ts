import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { ArtistsModule } from "../artists/artists.module";
import { BandsModule } from "../bands/bands.module";
import { GenresModule } from "../genres/genres.module";
import { TracksResolver } from "./tracks.resolver";
import { TracksService } from "./tracks.service";

@Module({
  imports: [HttpModule, ArtistsModule, BandsModule, GenresModule],
  providers: [TracksService, TracksResolver],
  exports: [TracksService]
})
export class TracksModule {}