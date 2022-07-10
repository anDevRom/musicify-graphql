import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { ArtistsModule } from "../artists/artists.module";
import { GenresModule } from "../genres/genres.module";
import { BandsResolver } from "./bands.resolver";
import { BandsService } from "./bands.service";

@Module({
  imports: [
    HttpModule, 
    GenresModule,
    ArtistsModule
  ],
  providers: [BandsService, BandsResolver],
  exports: [BandsService]
})
export class BandsModule {}