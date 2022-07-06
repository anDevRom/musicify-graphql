import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { BandsResolver } from "./bands.resolver";
import { BandsService } from "./bands.service";

@Module({
  imports: [HttpModule],
  providers: [BandsService, BandsResolver]
})
export class BandsModule {}