import type { IPlayer } from '../../game'
import type { Choices } from '../../game/system'
import type { BasePayload } from './base'

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
  choice: string
}

export interface DisplayEffectPayload extends BasePayload {
  type: 'DisplayEffect'
  promptId: string
  stackId: string // これがなにか分かってない
  title: string
  message: string
}

export interface DebugPrintPayload extends BasePayload {
  type: 'DebugPrint'
  message: string | object
}

export interface ContinuePayload extends BasePayload {
  type: 'Continue'
  promptId: string
  player: string
}

export interface ChoisePayload extends BasePayload {
  type: 'Choise'
  promptId: string
  player: string
  choices: Choices
}

export interface SyncPayload extends BasePayload {
  type: 'Sync'
  body: {
    game: GameStats
    players: { [key: string]: IPlayer }
  }
}
