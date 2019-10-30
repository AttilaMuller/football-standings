export interface Team {
  position: number;
  team: {
      id: number;
      name: string;
      crestUrl: string;
  };
  playedGames: number;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}
