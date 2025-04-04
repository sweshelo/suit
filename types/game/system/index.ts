import type { ICard } from "../card"

interface Option {
  id: string
  description: string
}

export type Choices = {
  title: string
} & ({
  type: 'card'
  items: ICard[]
} | {
  type: 'option'
  items: Option[]
})