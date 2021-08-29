export interface IAlbumBase {
  album_type: string;
  available_markets: Array<string>;
  external_urls: IExternalUrlObject;
  href: string;
  id: string;
  images: Array<IImageObject>;
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: IAlbumRestrictionObject;
  total_tracks: number;
  type: string;
  uri: string
}

export interface IAlbumRestrictionObject {
  reason: string;
}

export interface IArtistObject {
  external_urls: IExternalUrlObject;
  followers: IFollowersObject;
  genres: Array<string>
  href: string;
  id: string;
  images: Array<IImageObject>;
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface IAudioFeaturesObject {
  acousticness: number;
  analysis_url: string;
  danceability: number;
  duration_ms: number;
  energy: number;
  id: string;
  instrumentalness: number;
  key: number;
  liveness: number;
  loudness: number;
  mode: number;
  speechiness: number;
  tempo: number;
  time_signature: number;
  track_href: string;
  type: string;
  uri: string;
  valence: number;
}

export interface ICategoryObject {
  href: string;
  icons: Array<IImageObject>;
  id: string;
  name: string;
}

export interface IContextObject {
  external_urls: IExternalUrlObject;
  href: string;
  type: string;
  uri: string;
}

export interface ICopyrightObject {
  text: string;
  type: string;
}

export interface IExternalUrlObject {
  spotify: string;
}

export interface IImageObject {
  height: number;
  url: string;
  width: number;
}

export interface IFollowersObject {
  href: string;
  total: number;
}