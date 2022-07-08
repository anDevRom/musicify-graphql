
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface AlbumInput {
    name?: Nullable<string>;
    released?: Nullable<number>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    trackIds?: Nullable<Nullable<string>[]>;
    genresIds?: Nullable<Nullable<string>[]>;
    image?: Nullable<string>;
}

export interface ArtistInput {
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bandsIds?: Nullable<Nullable<string>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export interface BandInput {
    name?: Nullable<string>;
    origin?: Nullable<string>;
    membersIds?: Nullable<Nullable<string>[]>;
    website?: Nullable<string>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export interface GenreInput {
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface TrackInput {
    title?: Nullable<string>;
    albumId?: Nullable<string>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export interface UserInput {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    password?: Nullable<string>;
    email: string;
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
    albums(): Nullable<AlbumsCollection> | Promise<Nullable<AlbumsCollection>>;
    artist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;
    artists(): Nullable<ArtistsCollection> | Promise<Nullable<ArtistsCollection>>;
    band(id: string): Nullable<Band> | Promise<Nullable<Band>>;
    bands(): Nullable<BandsCollection> | Promise<Nullable<BandsCollection>>;
    genre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;
    genres(): Nullable<GenresCollection> | Promise<Nullable<GenresCollection>>;
    track(id: string): Nullable<Track> | Promise<Nullable<Track>>;
    tracks(): Nullable<TracksCollection> | Promise<Nullable<TracksCollection>>;
}

export interface IMutation {
    createAlbum(body?: Nullable<AlbumInput>): Nullable<Album> | Promise<Nullable<Album>>;
    updateAlbum(id: string, body?: Nullable<AlbumInput>): Nullable<Album> | Promise<Nullable<Album>>;
    deleteAlbum(id: string): Nullable<EntityDelete> | Promise<Nullable<EntityDelete>>;
    createArtist(body?: Nullable<ArtistInput>): Nullable<Artist> | Promise<Nullable<Artist>>;
    updateArtist(body?: Nullable<ArtistInput>): Nullable<Artist> | Promise<Nullable<Artist>>;
    deleteArtist(id: string): Nullable<EntityDelete> | Promise<Nullable<EntityDelete>>;
    createBand(body?: Nullable<BandInput>): Nullable<Band> | Promise<Nullable<Band>>;
    updateBand(id: string, body?: Nullable<BandInput>): Nullable<Band> | Promise<Nullable<Band>>;
    deleteBand(id: string): Nullable<EntityDelete> | Promise<Nullable<EntityDelete>>;
    createGenre(body?: Nullable<GenreInput>): Nullable<Genre> | Promise<Nullable<Genre>>;
    updateGenre(id: string, body?: Nullable<GenreInput>): Nullable<Genre> | Promise<Nullable<Genre>>;
    deleteGenre(id: string): Nullable<EntityDelete> | Promise<Nullable<EntityDelete>>;
    createTrack(body?: Nullable<TrackInput>): Nullable<Track> | Promise<Nullable<Track>>;
    updateTrack(id: string, body?: Nullable<TrackInput>): Nullable<Track> | Promise<Nullable<Track>>;
    deleteTrack(id: string): Nullable<EntityDelete> | Promise<Nullable<EntityDelete>>;
    register(body?: Nullable<UserInput>): Nullable<User> | Promise<Nullable<User>>;
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

type Nullable<T> = T | null;
