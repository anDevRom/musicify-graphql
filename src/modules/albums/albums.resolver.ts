import { Args, Context, Mutation, Parent, Query, ResolveField } from "@nestjs/graphql";
import { Resolver } from "@nestjs/graphql";
import { AlbumInput, TokenContext } from "src/graphql";
import { AlbumsService } from "./albums.service";

@Resolver('Album')
export class AlbumsResolver {
  constructor(private albumsService: AlbumsService) {}

  @Query()
  async album(@Args('id') id: string) {
    return this.albumsService.findOne(id);
  }

  @Query()
  async albums() {
    return this.albumsService.findAll();
  }

  @ResolveField()
  async bands(@Parent() album: AlbumInput) {
    return this.albumsService.getBands(album.bandsIds);
  }

  @ResolveField()
  async genres(@Parent() album: AlbumInput) {
    return this.albumsService.getGenres(album.genresIds);
  }

  @ResolveField()
  async tracks(@Parent() album: AlbumInput) {
    return this.albumsService.getTracks(album.trackIds);
  }

  @Mutation()
  async createAlbum(
    @Args('body') body: AlbumInput, 
    @Context() context: TokenContext
  ) {
    return this.albumsService.create(body, context.token);
  }

  @Mutation()
  async updateAlbum(
    @Args('id') id: string, 
    @Args('body') body: AlbumInput, 
    @Context() context: TokenContext
  ) {
    return this.albumsService.update(id, body, context.token);
  }

  @Mutation()
  async deleteAlbum(
    @Args('id') id: string, 
    @Context() context: TokenContext
  ) {
    return this.albumsService.delete(id, context.token);
  }
}