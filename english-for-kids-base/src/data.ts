
import { BaseComponent } from './components/base-component';

type Card = {
  cardShield: BaseComponent
};

type DataType = {
  gameMode: boolean,
  categoryIndex: number,
  arrayOfIndexes: number[],
  lastIndex: number,
  numberOfMistakes: number,
  gameEndTime: number,
  lastAnswer: boolean,
  startGame: boolean,
  cardsArray: Card[]
};

export const data: DataType = {
  gameMode: false,
  categoryIndex: 0,
  arrayOfIndexes: [],
  lastIndex: -1,
  numberOfMistakes: 0,
  gameEndTime: 3000,
  lastAnswer: false,
  startGame: false,
  cardsArray: [],
};
