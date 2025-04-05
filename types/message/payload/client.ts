/**
 * client.ts: Clientに対して送信するPayloadを記述
 */

import type { IPlayer } from '../../game';
import type { Choices } from '../../game/system';
import type { BasePayload } from './base';

interface GameStats {
  round: number;
  turn: number;
}

export interface DisplayEffectPayload extends BasePayload {
  type: 'DisplayEffect';
  promptId: string;
  stackId: string; // これがなにか分かってない
  title: string;
  message: string;
}

export interface DebugPrintPayload extends BasePayload {
  type: 'DebugPrint';
  message: string | object;
}

export interface ChoicesPayload extends BasePayload {
  type: 'Choices';
  promptId: string;
  player: string;
  choices: Choices;
}

export interface SyncPayload extends BasePayload {
  type: 'Sync';
  body: {
    game: GameStats;
    players: { [key: string]: IPlayer };
  };
}
