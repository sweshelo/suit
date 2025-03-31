import type { IAtom } from "../../game";
import type { BasePayload } from "./base";

export interface DebugDrawPayload extends BasePayload {
  type: 'DebugDraw'
  player: string
}

export interface OverridePayload extends BasePayload {
  type: 'Override'
  player: string
  target: IAtom
  parent: IAtom
}

export interface UnitDrivePayload extends BasePayload {
  type: 'UnitDrive'
  player: string
  target: IAtom
}