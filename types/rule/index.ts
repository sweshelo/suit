export interface Rule {
  system: {
    round: number;
    draw: {
      top: number;
      override: number;
      mulligan: number;
    };
    handicap: {
      draw: boolean;
      cp: boolean;
    };
    cp: {
      init: number;
      increase: number;
      max: number,
      ceil: number,
    };
  };
  player: {
    max: {
      life: number;
      hand: number;
      trigger: number;
      field: number;
    };
  };
  misc: {
    strictOverride: boolean;
    suicideJoker: boolean;
  };
  debug?: {
    reveal: {
      opponent: {
        deck: boolean;
        hand: boolean;
        trigger: boolean;
        trash: boolean;
      };
      self: {
        deck: boolean;
      };
    };
  };
}
