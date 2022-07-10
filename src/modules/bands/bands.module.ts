import { HttpModule } from '@nestjs/axios';
import { forwardRef, Module } from '@nestjs/common';
import { ArtistsModule } from '../artists/artists.module';
import { GenresModule } from '../genres/genres.module';
import { BandsResolver } from './bands.resolver';
import { BandsService } from './bands.service';

@Module({
  imports: [HttpModule, forwardRef(() => ArtistsModule), GenresModule],
  providers: [BandsService, BandsResolver],
  exports: [BandsService],
})
export class BandsModule {}
