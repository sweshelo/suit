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
      attack: boolean;
    };
    cp: {
      init: number;
      increase: number;
      max: number;
      ceil: number;
      carryover: boolean;
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
    enable: boolean;
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
