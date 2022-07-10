import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ArtistsModule } from '../artists/artists.module';
import { BandsModule } from '../bands/bands.module';
import { GenresModule } from '../genres/genres.module';
import { TracksModule } from '../tracks/tracks.module';
import { AlbumsResolver } from './albums.resolver';
import { AlbumsService } from './albums.service';

@Module({
  imports: [HttpModule, ArtistsModule, BandsModule, GenresModule, TracksModule],
  providers: [AlbumsService, AlbumsResolver],
  exports: [AlbumsService],
})
export class AlbumsModule {}
