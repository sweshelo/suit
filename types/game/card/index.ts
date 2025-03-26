export interface IAtom {
  id: string
}

export interface ICard extends IAtom {
  catalogId: string
}

export interface IUnit extends ICard {
  bp: number
}
