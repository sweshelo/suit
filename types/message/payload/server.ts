import type { RequestPayload } from "./base";

export interface RoomOpenRequestPayload extends RequestPayload {
  type: 'RoomOpenRequest';
  name: string;
}

export interface RoomOpenResponsePayload extends RequestPayload {
  type: 'RoomOpenResponse';
  roomId: string
}
