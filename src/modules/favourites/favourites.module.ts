import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ArtistsModule } from '../artists/artists.module';
import { BandsModule } from '../bands/bands.module';
import { GenresModule } from '../genres/genres.module';
import { TracksModule } from '../tracks/tracks.module';
import { FavouritesResolver } from './favourites.resolver';
import { FavouritesService } from './favourites.service';

@Module({
  imports: [HttpModule, ArtistsModule, BandsModule, GenresModule, TracksModule],
  providers: [FavouritesService, FavouritesResolver],
})
export class FavouritesModule {}
