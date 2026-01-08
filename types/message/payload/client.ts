/**
 * client.ts: Clientに対して送信するPayloadを記述
 */

import type { IPlayer } from '../../game';
import type { Choices } from '../../game/system';
import type { Rule } from '../../rule';
import type { BasePayload } from './base';
import type { ErrorCode } from '../../../constant/error';

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

/**
 * エラー通知ペイロード
 * サーバーからクライアントにエラー情報を送信する
 */
export interface ErrorPayload extends BasePayload {
  type: 'Error';
  errorCode: ErrorCode;
  message: string;
  details?: Record<string, unknown>;
  timestamp: number;
}

/**
 * プレイヤー切断通知ペイロード
 * 対戦相手が切断した際に残りのプレイヤーに送信される
 */
export interface PlayerDisconnectedPayload extends BasePayload {
  type: 'PlayerDisconnected';
  disconnectedPlayerId: string;
  reason: 'connection_lost' | 'client_close' | 'timeout';
  timestamp: number;
  roomWillClose: boolean;
}

/**
 * プレイヤー復帰通知ペイロード
 * 切断したプレイヤーが再接続した際に他のプレイヤーに送信される
 */
export interface PlayerReconnectedPayload extends BasePayload {
  type: 'PlayerReconnected';
  reconnectedPlayerId: string;
  timestamp: number;
}

/**
 * ルーム閉鎖通知ペイロード
 * ルームが閉鎖される際にクライアントに送信される
 */
export interface RoomClosedPayload extends BasePayload {
  type: 'RoomClosed';
  roomId: string;
  reason: 'empty' | 'admin_close' | 'error';
  message?: string;
}

/**
 * ターンチェンジペイロード
 * クライアントにターンチェンジを通知
 */
export interface TurnChangePayload extends BasePayload {
  type: 'TurnChange';
  player: string;
  isFirst: boolean;
}

/**
 * マッチングステータス更新ペイロード
 * サーバーからクライアントにマッチング状態を通知
 */
export interface MatchingStatusPayload extends BasePayload {
  type: 'MatchingStatus';
  queueId: string;
  status: 'searching' | 'found' | 'cancelled' | 'expired';
  queuePosition?: number;
  estimatedWaitTime?: number;
}

/**
 * マッチング成立ペイロード
 * サーバーからクライアントにマッチング成立を通知
 */
export interface MatchFoundPayload extends BasePayload {
  type: 'MatchFound';
  roomId: string;
  opponent: {
    id: string;
    name: string;
    rating?: number;
  };
}
