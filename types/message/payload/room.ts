import type { BasePayload, RequestPayload } from "./base";

export interface RoomPayload extends BasePayload {
  roomId: string;
}

/**
 * プレイヤー参加登録ペイロード
 */
export interface PlayerEntryPayload extends RequestPayload, RoomPayload {
  type: 'PlayerEntry'
  player: {
    name: string;
    id: string;
    deck: string[]
  }
}

