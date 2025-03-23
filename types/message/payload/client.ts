import type { IAtom } from "../../card";
import type { BasePayload } from "./base";

interface PlayerStats {
  id: string
  name: string
  deck: IAtom[]
  hand: IAtom[]
  field: IAtom[]
}

interface GameStats {
  round: number
  turn: number
}

export interface SyncPayload extends BasePayload {
  type: 'Sync';
  body: {
    game: GameStats
    players: ({ [key: string]: PlayerStats })[]
  };
}