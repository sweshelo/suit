import type { IAtom, ICard, IUnit } from '../card';

export interface IPlayer {
  id: string;
  name: string;
  deck: IAtom[];
  hand: IAtom[];
  field: IUnit[];
  trash: ICard[];
  delete: ICard[];
  trigger: IAtom[];
  cp: {
    current: number;
    max: number;
  };
  life: {
    current: number;
    max: number;
  };
  joker: number;
}
