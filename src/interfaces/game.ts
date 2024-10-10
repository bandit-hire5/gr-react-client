import { Card } from './card';

export interface Game {
  id: string;
  name: string;
  description: string;
  image: string;
  minPlayers: number;
  maxPlayers: number;
  configuration: GameConfiguration;
}

export interface TichuConfiguration {
  cards: Card[];
  teamCount: number;
  teamMemberCount: number;
  initialCardCountPerPlayer: number;
}

export type GameConfiguration = TichuConfiguration;
