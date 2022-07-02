import { Query } from "@nestjs/graphql";
import { Resolver } from "@nestjs/graphql";
import { AlbumsService } from "./albums.service";

@Resolver('Album')
export class AlbumsResolver {
  constructor(
    private albumsService: AlbumsService
  ) {}

  @Query()
  async albums() {
    return this.albumsService.findAll();
  }
}