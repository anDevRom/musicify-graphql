import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { TracksResolver } from "./tracks.resolver";
import { TracksService } from "./tracks.service";

@Module({
  imports: [HttpModule],
  providers: [TracksService, TracksResolver]
})
export class TracksModule {}