import type {
  ChoicesPayload,
  DebugPrintPayload,
  DisplayEffectPayload,
  OperationPayload,
  SoundEffectPayload,
  SyncPayload,
  TurnEndPayload,
  VisualEffectPayload,
} from './client';
import type {
  AttackPayload,
  BootPayload,
  ChoosePayload,
  ContinuePayload,
  DebugDrawPayload,
  DiscardPayload,
  OverridePayload,
  TriggerSetPayload,
  UnitDrivePayload,
  WithdrawalPayload,
} from './core';
import type { PlayerEntryPayload } from './room';
import type { RoomOpenRequestPayload, RoomOpenResponsePayload } from './server';

export type * from './base';
export type * from './room';
export type * from './server';
export type * from './client';
export type * from './core';

export type Payload =
  | RoomOpenRequestPayload
  | RoomOpenResponsePayload
  | PlayerEntryPayload
  | SyncPayload
  | DebugDrawPayload
  | OverridePayload
  | UnitDrivePayload
  | DisplayEffectPayload
  | ContinuePayload
  | DebugPrintPayload
  | WithdrawalPayload
  | ChoosePayload
  | ChoicesPayload
  | TriggerSetPayload
  | VisualEffectPayload
  | SoundEffectPayload
  | OperationPayload
  | TurnEndPayload
  | AttackPayload
  | BootPayload
  | DiscardPayload;
