import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { AlbumsResolver } from "./albums.resolver";
import { AlbumsService } from "./albums.service";

@Module({
  imports: [HttpModule],
  providers: [AlbumsService, AlbumsResolver]
})
export class AlbumsModule {}