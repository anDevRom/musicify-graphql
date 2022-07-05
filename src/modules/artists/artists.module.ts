import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { ArtistsResolver } from "./artists.resolver";
import { ArtistsService } from "./artists.service";

@Module({
  imports: [HttpModule],
  providers: [ArtistsService, ArtistsResolver]
})
export class ArtistsModule {}