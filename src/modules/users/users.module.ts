import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { UsersResolver } from "./users.resolver";
import { UsersService } from "./users.service";

@Module({
  imports: [HttpModule],
  providers: [UsersService, UsersResolver]
})
export class UsersModule {}