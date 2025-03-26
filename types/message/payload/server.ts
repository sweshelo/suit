import type { RequestPayload, ResponsePayload } from './base'

export interface RoomOpenRequestPayload extends RequestPayload {
  type: 'RoomOpenRequest'
  name: string
}

export interface RoomOpenResponsePayload extends ResponsePayload {
  type: 'RoomOpenResponse'
  roomId: string
}
