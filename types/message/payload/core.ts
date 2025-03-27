import type { BasePayload } from "./base";

export interface DebugDrawPayload extends BasePayload{
  type: 'DebugDraw'
  player: string
}