import {
  Resolver,
  Query,
  Context,
  ResolveField,
  Mutation,
  Parent,
  Args,
} from '@nestjs/graphql';
import { FavouritesInput, TokenContext } from 'src/graphql';
import { FavouritesService } from './favourites.service';

@Resolver('Favourites')
export class FavouritesResolver {
  constructor(private favouritesService: FavouritesService) {}

  @Query()
  async favourites(@Context() context: TokenContext) {
    return this.favouritesService.findAll(context.token);
  }

  @ResolveField()
  id(@Parent() favourites: FavouritesInput) {
    return favourites._id;
  }

  @ResolveField()
  async bands(@Parent() favourites: FavouritesInput) {
    return this.favouritesService.getBands(favourites.bandsIds);
  }

  @ResolveField()
  async genres(@Parent() favourites: FavouritesInput) {
    return this.favouritesService.getGenres(favourites.genresIds);
  }

  @ResolveField()
  async artists(@Parent() favourites: FavouritesInput) {
    return this.favouritesService.getArtists(favourites.artistsIds);
  }

  @ResolveField()
  async tracks(@Parent() favourites: FavouritesInput) {
    return this.favouritesService.getTracks(favourites.tracksIds);
  }

  @Mutation()
  async addTrackToFavourites(
    @Args('id') id: string,
    @Context() context: TokenContext,
  ) {
    return this.favouritesService.add('tracks', id, context.token);
  }

  @Mutation()
  async addBandToFavourites(
    @Args('id') id: string,
    @Context() context: TokenContext,
  ) {
    return this.favouritesService.add('bands', id, context.token);
  }

  @Mutation()
  async addArtistToFavourites(
    @Args('id') id: string,
    @Context() context: TokenContext,
  ) {
    return this.favouritesService.add('artists', id, context.token);
  }

  @Mutation()
  async addGenreToFavourites(
    @Args('id') id: string,
    @Context() context: TokenContext,
  ) {
    return this.favouritesService.add('genres', id, context.token);
  }
}
