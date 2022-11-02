type Country =
  | "DK"
  | "UA"
  | "NO"
  | "RU"
  | "CA"
  | "EST"
  | "LV"
  | "ME"
  | "PL"
  | "IL"
  | "KZ"
  | "FR";

export interface PlayerData {
  playerId: string;
  clanId: string;
}

export interface PlayerStats {
  ovr: number;
  acc: number;
  imp: number;
  ast: number;
  ent: number;
  utl: number;
  exp: number;
}

export interface Player {
  name: string;
  clan: string;
  country: string;
  playerData: PlayerData;
  playerStats: PlayerStats;
}
