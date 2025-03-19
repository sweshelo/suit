import type { RequestPayload } from "./base";

export interface RoomOpenPayload extends RequestPayload {
  type: 'RoomOpen';
  name: string;
}