import type { Rule } from '../../rule';
import type { BasePayload } from './base';

export interface RoomPayload extends BasePayload {
  roomId: string;
  rule?: Rule
}

/**
 * プレイヤー参加登録ペイロード
 */
export interface PlayerEntryPayload extends RoomPayload {
  type: 'PlayerEntry';
  player: {
    name: string;
    id: string;
    deck: string[];
  };
}
