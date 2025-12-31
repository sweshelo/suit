/**
 * client.ts: Clientに対して送信するPayloadを記述
 */

import type { IPlayer } from '../../game';
import type { Choices } from '../../game/system';
import type { Rule } from '../../rule';
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
  unitId: string | undefined;
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

export interface SelectedPayload extends BasePayload {
  type: 'Selected';
  promptId: string;
}

export interface SyncPayload extends BasePayload {
  type: 'Sync';
  body: {
    rule: Rule;
    game: GameStats;
    players: { [key: string]: IPlayer };
  };
}

export type VisualEffectPayload =
  | ({
    type: 'VisualEffect';
    body: {
      effect: 'drive';
      type: 'UNIT' | 'EVOLVE' | 'INTERCEPT' | 'TRIGGER' | 'JOKER';
      player: string;
      image: string;
    };
  })
  | ({
    type: 'VisualEffect';
    body: {
      effect: 'attack';
      attackerId: string;
    };
  })
  | ({
    type: 'VisualEffect';
    body: {
      effect: 'launch';
      attackerId: string;
      blockerId?: string;
    };
  })
  | ({
    type: 'VisualEffect';
    body: {
      effect: 'launch-cancel';
      attackerId: string;
    }
  })
  | ({
    type: 'VisualEffect';
    body: {
      effect: 'status';
      unitId: string;
      type: 'bp' | 'base-bp' | 'damage' | 'level';
      value: number;
    }
  })
  | ({
    type: 'VisualEffect';
    body: {
      effect: 'select';
      unitId: string;
    };
  })
  | ({
    type: 'VisualEffect';
    body: {
      effect: 'block';
      blockerId: string;
    };
  })

export interface SoundEffectPayload extends BasePayload {
  type: 'SoundEffect';
  soundId: string;
}

export interface OperationPayload extends BasePayload {
  type: 'Operation';
  action: 'freeze' | 'defrost';
}

export interface TurnEndPayload extends BasePayload {
  type: 'TurnEnd';
}

export interface MulliganStartPayload extends BasePayload {
  type: 'MulliganStart';
}
