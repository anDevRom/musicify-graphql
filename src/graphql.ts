
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface AlbumInput {
    _id: string;
    name?: Nullable<string>;
    released?: Nullable<number>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    trackIds?: Nullable<Nullable<string>[]>;
    genresIds?: Nullable<Nullable<string>[]>;
    image?: Nullable<string>;
}

export interface CreateAlbumInput {
    name: string;
    released?: Nullable<number>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    trackIds?: Nullable<Nullable<string>[]>;
    genresIds?: Nullable<Nullable<string>[]>;
    image?: Nullable<string>;
}

export interface UpdateAlbumInput {
    name?: Nullable<string>;
    released?: Nullable<number>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    trackIds?: Nullable<Nullable<string>[]>;
    genresIds?: Nullable<Nullable<string>[]>;
    image?: Nullable<string>;
}

export interface ArtistInput {
    _id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bandsIds?: Nullable<Nullable<string>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export interface CreateArtistInput {
    firstName: string;
    secondName: string;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country: string;
    bandsIds?: Nullable<Nullable<string>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export interface UpdateArtistInput {
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bandsIds?: Nullable<Nullable<string>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export interface MemberInput {
    artist: string;
    instrument?: Nullable<string>;
    years?: Nullable<Nullable<string>[]>;
}

export interface BandInput {
    _id: string;
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<MemberInput>[]>;
    website?: Nullable<string>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export interface CreateBandInput {
    name: string;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<MemberInput>[]>;
    website?: Nullable<string>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export interface UpdateBandInput {
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<MemberInput>[]>;
    website?: Nullable<string>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export interface FavouritesInput {
    _id: string;
    userId?: Nullable<string>;
    bandsIds?: Nullable<Nullable<string>[]>;
    genresIds?: Nullable<Nullable<string>[]>;
    artistsIds?: Nullable<Nullable<string>[]>;
    tracksIds?: Nullable<Nullable<string>[]>;
}

export interface AddFavourite {
    type: string;
    id: string;
}

export interface GenreInput {
    _id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface CreateGenreInput {
    name: string;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface UpdateGenreInput {
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface TrackInput {
    _id: string;
    title: string;
    albumId?: Nullable<string>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export interface CreateTrackInput {
    title: string;
    albumId?: Nullable<string>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export interface UpdateTrackInput {
    title?: Nullable<string>;
    albumId?: Nullable<string>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export interface CreateUserInput {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
}

export interface UserInput {
    _id: string;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
}

export interface CredentialsInput {
    email: string;
    password: string;
}

export interface EntityDelete {
    acknowledged?: Nullable<boolean>;
    deletedCount?: Nullable<number>;
}

export interface TokenContext {
    token?: Nullable<string>;
}

export interface AlbumsCollection {
    items: Nullable<Album>[];
    limit: number;
    offset: number;
    total: number;
}

export interface Album {
    id: string;
    name?: Nullable<string>;
    released?: Nullable<number>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    image?: Nullable<string>;
}

export interface IQuery {
    album(id: string): Nullable<Album> | Promise<Nullable<Album>>;
    albums(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<AlbumsCollection> | Promise<Nullable<AlbumsCollection>>;
    artist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;
    artists(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<ArtistsCollection> | Promise<Nullable<ArtistsCollection>>;
    band(id: string): Nullable<Band> | Promise<Nullable<Band>>;
    bands(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<BandsCollection> | Promise<Nullable<BandsCollection>>;
    favourites(): Nullable<Favourites> | Promise<Nullable<Favourites>>;
    genre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;
    genres(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<GenresCollection> | Promise<Nullable<GenresCollection>>;
    track(id: string): Nullable<Track> | Promise<Nullable<Track>>;
    tracks(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<TracksCollection> | Promise<Nullable<TracksCollection>>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
    jwt(creds: CredentialsInput): Nullable<TokenJwt> | Promise<Nullable<TokenJwt>>;
}

export interface IMutation {
    createAlbum(body: CreateAlbumInput): Nullable<Album> | Promise<Nullable<Album>>;
    updateAlbum(id: string, body: UpdateAlbumInput): Nullable<Album> | Promise<Nullable<Album>>;
    deleteAlbum(id: string): Nullable<EntityDelete> | Promise<Nullable<EntityDelete>>;
    createArtist(body: CreateArtistInput): Nullable<Artist> | Promise<Nullable<Artist>>;
    updateArtist(id: string, body: UpdateArtistInput): Nullable<Artist> | Promise<Nullable<Artist>>;
    deleteArtist(id: string): Nullable<EntityDelete> | Promise<Nullable<EntityDelete>>;
    createBand(body: CreateBandInput): Nullable<Band> | Promise<Nullable<Band>>;
    updateBand(id: string, body: UpdateBandInput): Nullable<Band> | Promise<Nullable<Band>>;
    deleteBand(id: string): Nullable<EntityDelete> | Promise<Nullable<EntityDelete>>;
    addTrackToFavourites(id: string): Nullable<Favourites> | Promise<Nullable<Favourites>>;
    addBandToFavourites(id: string): Nullable<Favourites> | Promise<Nullable<Favourites>>;
    addArtistToFavourites(id: string): Nullable<Favourites> | Promise<Nullable<Favourites>>;
    addGenreToFavourites(id: string): Nullable<Favourites> | Promise<Nullable<Favourites>>;
    createGenre(body: CreateGenreInput): Nullable<Genre> | Promise<Nullable<Genre>>;
    updateGenre(id: string, body: UpdateGenreInput): Nullable<Genre> | Promise<Nullable<Genre>>;
    deleteGenre(id: string): Nullable<EntityDelete> | Promise<Nullable<EntityDelete>>;
    createTrack(body: CreateTrackInput): Nullable<Track> | Promise<Nullable<Track>>;
    updateTrack(id: string, body: UpdateTrackInput): Nullable<Track> | Promise<Nullable<Track>>;
    deleteTrack(id: string): Nullable<EntityDelete> | Promise<Nullable<EntityDelete>>;
    register(body: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;
}

export interface ArtistsCollection {
    items: Nullable<Artist>[];
    limit: number;
    offset: number;
    total: number;
}

export interface Artist {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bands?: Nullable<Nullable<Band>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export interface Member {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    instrument?: Nullable<string>;
    years?: Nullable<Nullable<string>[]>;
}

export interface BandsCollection {
    items: Nullable<Band>[];
    limit: number;
    offset: number;
    total: number;
}

export interface Band {
    id: string;
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<Member>[]>;
    website?: Nullable<string>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export interface Favourites {
    id: string;
    userId?: Nullable<string>;
    bands?: Nullable<Nullable<Band>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    artists?: Nullable<Nullable<Artist>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
}

export interface GenresCollection {
    items: Nullable<Genre>[];
    limit: number;
    offset: number;
    total: number;
}

export interface Genre {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface TracksCollection {
    items: Nullable<Track>[];
    limit: number;
    offset: number;
    total: number;
}

export interface Track {
    id: string;
    title: string;
    album?: Nullable<Album>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export interface User {
    id: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    password?: Nullable<string>;
    email: string;
}

export interface TokenJwt {
    jwt?: Nullable<string>;
}

type Nullable<T> = T | null;
