import { getModelForClass, prop } from "@typegoose/typegoose";

interface Awards {
  wins: number;
  nominations: number;
  text: string;
}

interface Imdb {
  rating: number;
  votes: number;
  id: number;
}

interface Tomatoes {
  viewer: Viewer;
  lastUpdated: Date;
}

interface Viewer {
  rating: number;
  numReviews: number;
  meter: number;
}

// TODO: Clean this up

export class Movie {
  @prop({ type: () => String })
  public plot!: string;

  @prop({ type: () => [String] })
  public genres!: string[];

  @prop({ type: () => Number })
  public runtime!: number;

  @prop({ type: () => String })
  public cast!: string[];

  @prop({ type: () => Number })
  public num_mflix_comments!: number;

  @prop({ type: () => String })
  public title!: string;

  @prop({ type: () => String })
  public fullplot!: string;

  @prop({ type: () => [String] })
  public countries!: string[];

  @prop({ type: () => Date })
  public released!: Date;

  @prop({ type: () => [String] })
  public directors!: string[];

  @prop({ type: () => String })
  public rated!: string;

  // @prop({ type: () => Number })
  // public awards!: Awards;

  @prop({ type: () => String })
  public lastupdated!: string;

  @prop({ type: () => Number })
  public year!: number;

  // @prop({ type: () => Number })
  // public imdb!: Imdb;

  @prop({ type: () => String })
  public type!: string;

  // @prop({ type: () => Number })
  // public tomatoes!: Tomatoes;
}

export const MovieModel = getModelForClass(Movie);
