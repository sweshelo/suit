import type { IAtom, ICard, IUnit } from '../../game';
import type { BasePayload } from './base';

export interface DebugDrawPayload extends BasePayload {
  type: 'DebugDraw';
  player: string;
}

export interface DebugDrivePayload extends BasePayload {
  type: 'DebugDrive';
  player: string;
  catalogId: string;
}

export interface DebugMakePayload extends BasePayload {
  type: 'DebugMake';
  player: string;
  catalogId: string;
}


export interface OverridePayload extends BasePayload {
  type: 'Override';
  player: string;
  target: IAtom;
  parent: IAtom;
}

export interface UnitDrivePayload extends BasePayload {
  type: 'UnitDrive';
  player: string;
  target: IAtom;
}

export interface EvolveDrivePayload extends BasePayload {
  type: 'EvolveDrive';
  player: string;
  target: IAtom;
  source: IAtom;
}

/**
 * プレイヤーが選択肢を選んだときに送信されるPayload
 * (<-> ChoicesResponse: 選択肢をClientに提示するPayload)
 */
export interface ChoosePayload extends BasePayload {
  type: 'Choose';
  promptId: string;
  choice: string[] | undefined;
}

export interface WithdrawalPayload extends BasePayload {
  type: 'Withdrawal';
  player: string;
  target: IUnit;
}

export interface ContinuePayload extends BasePayload {
  type: 'Continue';
  promptId: string;
  player: string;
}

export interface TriggerSetPayload extends BasePayload {
  type: 'TriggerSet';
  player: string;
  target: ICard;
}

export interface AttackPayload extends BasePayload {
  type: 'Attack';
  player: string;
  target: IUnit;
}

export interface BootPayload extends BasePayload {
  type: 'Boot';
  player: string;
  target: IUnit;
}

export interface DiscardPayload extends BasePayload {
  type: 'Discard';
  player: string;
  target: ICard;
}
