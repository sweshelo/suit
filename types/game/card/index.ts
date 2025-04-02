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
  rarity: 'c' | 'uc' | 'r' | 'vr' | 'sr' | 'pr' | 'sp'
  cost: number
  color: number
  bp?: [number, number, number]
  ability: string
  originality: number
  img: string
  type: 'unit' | 'trigger' | 'intercept' | 'advanced_unit'
  species?: string[]
  info: {
    version: number
    number: number
  }
  
  // カード効果ハンドラ
  onDrive?: Function
  onBreak?: Function
  onDamage?: Function
  onDraw?: Function
  [key: string]: any // 動的なハンドラ名に対応するためのインデックスシグネチャ
}
