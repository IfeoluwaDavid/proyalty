import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ArtistMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Artist {
  readonly id: string;
  readonly name: string;
  readonly rate: number;
  readonly streams: number;
  readonly payout?: number;
  readonly averagePayout?: number;
  readonly paidOut?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Artist, ArtistMetaData>);
  static copyOf(source: Artist, mutator: (draft: MutableModel<Artist, ArtistMetaData>) => MutableModel<Artist, ArtistMetaData> | void): Artist;
}