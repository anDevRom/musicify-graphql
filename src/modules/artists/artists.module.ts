import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { BandsModule } from "../bands/bands.module";
import { ArtistsResolver } from "./artists.resolver";
import { ArtistsService } from "./artists.service";

@Module({
  imports: [HttpModule, BandsModule],
  providers: [ArtistsService, ArtistsResolver],
  exports: [ArtistsService]
})
export class ArtistsModule {}