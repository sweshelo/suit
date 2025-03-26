import type { IPlayer } from '../../game'
import type { BasePayload } from './base'

interface GameStats {
  round: number
  turn: number
}

export interface SyncPayload extends BasePayload {
  type: 'Sync'
  body: {
    game: GameStats
    players: { [key: string]: IPlayer }
  }
}
