export type CardRanks =
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | 'J'
  | 'Q'
  | 'K'
  | 'A'
  | 'Mahjong'
  | 'Dog'
  | 'Dragon'
  | 'Phoenix';

export type CardRanksMap<T> = Partial<Record<CardRanks, T>>;

export type CardSuits = 'jade' | 'sword' | 'star' | 'pagoda';

export interface Card {
  rank: CardRanks;
  suit?: CardSuits;
}
