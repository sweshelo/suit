export interface IAtom {
  id: string
}

export interface ICard extends IAtom {
  catalogId: string
  lv: number
}

export interface IUnit extends ICard {
  bp: number
}

export interface Catalog {
  id: string
  name: string
  cost: number
  color: number
  bp?: [number, number, number]
  ability: string
  type: 'unit' | 'trigger' | 'intercept' | 'advanced_unit'
  species?: string[]
  version?: string
  img: string
}
