import type { BasePayload } from './base';

export interface RoomPayload extends BasePayload {
  roomId: string;
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
  jokersOwned?: string[]; // FIXME: 将来的に deck に含める
}
