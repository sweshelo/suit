import type { IPlayer } from '../../game'
import type { BasePayload } from './base'
import type { IAtom } from '../../game/card'

interface GameStats {
  round: number
  turn: number
}

/**
 * 効果選択応答Payload
 * カード効果によるユーザー選択への応答を表す
 */
export interface EffectResponsePayload extends BasePayload {
  type: 'EffectResponse'
  promptId: string
  choice: any
}

export interface DisplayEffectPayload extends BasePayload {
  type: 'DisplayResponse'
  promptId: string
  stackId: string // これがなにか分かってない
  title: string
  message: string
}

export interface SyncPayload extends BasePayload {
  type: 'Sync'
  body: {
    game: GameStats
    players: { [key: string]: IPlayer }
  }
}
