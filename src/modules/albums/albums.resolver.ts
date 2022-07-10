import { Args, Context, Mutation, Parent, Query, ResolveField } from "@nestjs/graphql";
import { Resolver } from "@nestjs/graphql";
import { AlbumInput, CreateAlbumInput, TokenContext, UpdateAlbumInput } from "src/graphql";
import { AlbumsService } from "./albums.service";

@Resolver('Album')
export class AlbumsResolver {
  constructor(private albumsService: AlbumsService) {}

  @Query()
  async album(@Args('id') id: string) {
    return this.albumsService.findOne(id);
  }

  @Query()
  async albums(
    @Args('limit') limit: number, 
    @Args('offset') offset: number
  ) {
    return this.albumsService.findAll(limit, offset);
  }

  @ResolveField()
  id(@Parent() album: AlbumInput) {
    return album._id;
  }

  @ResolveField()
  async artists(@Parent() album: AlbumInput) {
    return this.albumsService.getArtists(album.artistsIds);
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
    @Args('body') body: CreateAlbumInput, 
    @Context() context: TokenContext
  ) {
    return this.albumsService.create(body, context.token);
  }

  @Mutation()
  async updateAlbum(
    @Args('id') id: string, 
    @Args('body') body: UpdateAlbumInput, 
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