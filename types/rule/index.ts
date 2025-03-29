export interface Rule {
  system: {
    round: number
    draw: {
      top: number
      override: number
    }
    handicap: {
      draw: boolean
      cp: boolean
    }
    cp: {
      init: number
      increase: number
    }
  }
  player: {
    max: {
      life: number
      hand: number
      trigger: number
      field: number
      cp: number
    }
  }
}