const jokerGuageAmountKey = [
  '小',
  '中',
  '大',
  '特大',
] as const

export const JOKER_GAUGE_AMOUNT: Record<JokerGuageAmountKey, number> = {
  '小': 40,
  '中': 52.5,
  '大': 65,
  '特大': 80,
}

export type JokerGuageAmountKey = (typeof jokerGuageAmountKey)[number];
