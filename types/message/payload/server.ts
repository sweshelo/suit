import type { Rule } from '../../rule';
import type { RequestPayload, ResponsePayload } from './base';

export interface RoomOpenRequestPayload extends RequestPayload {
  type: 'RoomOpenRequest';
  name: string;
  rule: Rule;
}

export interface RoomOpenResponsePayload extends ResponsePayload {
  type: 'RoomOpenResponse';
  roomId: string;
}

/**
 * マッチング開始リクエストペイロード
 * クライアントからサーバーにマッチングキューへの参加を要求
 */
export interface MatchingStartRequestPayload extends RequestPayload {
  type: 'MatchingStartRequest';
  userId: string;
  mode: 'random' | 'rating' | 'rule';
  criteria: {
    rating?: number;
    rulePreference?: Rule;
    deck: string[];
    jokersOwned?: string[];
  };
}

/**
 * マッチングキャンセルリクエストペイロード
 * クライアントからサーバーにマッチングキャンセルを要求
 */
export interface MatchingCancelRequestPayload extends RequestPayload {
  type: 'MatchingCancelRequest';
  userId: string;
  queueId: string;
}
