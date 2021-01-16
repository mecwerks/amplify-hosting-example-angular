import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Anime {
  readonly id: string;
  readonly title?: string;
  readonly rating?: string;
  constructor(init: ModelInit<Anime>);
  static copyOf(source: Anime, mutator: (draft: MutableModel<Anime>) => MutableModel<Anime> | void): Anime;
}