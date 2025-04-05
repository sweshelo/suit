import type { IAtom, IUnit } from '../../game';
import type { BasePayload } from './base';

export interface DebugDrawPayload extends BasePayload {
  type: 'DebugDraw';
  player: string;
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

/**
 * プレイヤーが選択肢を選んだときに送信されるPayload
 * (<-> ChoicesResponse: 選択肢をClientに提示するPayload)
 */
export interface ChoosePayload extends BasePayload {
  type: 'Choose';
  promptId: string;
  choice: string[];
}

export interface WithdrawalPayload extends BasePayload {
  type: 'Withdrawal'
  player: string
  target: IUnit
}

export interface ContinuePayload extends BasePayload {
  type: 'Continue';
  promptId: string;
  player: string;
}