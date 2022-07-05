import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from "path";
import { AlbumsModule } from "./modules/albums/albums.module";
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from "./modules/users/users.module";
import { ArtistsModule } from "./modules/artists/artists.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      }
    }),
    UsersModule,
    ArtistsModule,
    AlbumsModule,
  ]
})
export class AppModule {}