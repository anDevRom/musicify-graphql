import { HttpModule } from '@nestjs/axios';
import { forwardRef, Module } from '@nestjs/common';
import { BandsModule } from '../bands/bands.module';
import { ArtistsResolver } from './artists.resolver';
import { ArtistsService } from './artists.service';

@Module({
  imports: [HttpModule, forwardRef(() => BandsModule)],
  providers: [ArtistsService, ArtistsResolver],
  exports: [ArtistsService],
})
export class ArtistsModule {}
