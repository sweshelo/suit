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
