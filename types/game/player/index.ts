import type { IAtom, IUnit } from '../card'

export interface IPlayer {
  id: string
  name: string
  deck: IAtom[]
  hand: IAtom[]
  field: IUnit[]
  cp: {
    current: number
    max: number
  }
  life: {
    current: number
    max: number
  }
}
