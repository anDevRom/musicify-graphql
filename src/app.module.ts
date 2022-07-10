import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from "path";
import { AlbumsModule } from "./modules/albums/albums.module";
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from "./modules/users/users.module";
import { ArtistsModule } from "./modules/artists/artists.module";
import { GenresModule } from "./modules/genres/genres.module";
import { TracksModule } from "./modules/tracks/tracks.module";
import { BandsModule } from "./modules/bands/bands.module";
import { FavouritesModule } from "./modules/favourites/favourites.module";

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
      },
      context: ({req}) => {
        const token = req.headers.authorization;

        return { token };
      }
    }),
    UsersModule,
    AlbumsModule,
    ArtistsModule,
    BandsModule,
    FavouritesModule,
    GenresModule,
    TracksModule,
  ]
})
export class AppModule {}