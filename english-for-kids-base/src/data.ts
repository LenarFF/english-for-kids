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
  cardsArray: Card[],
  DIFFICULT_WORD_QUANTITY: number,
  wrongWordCardsInfo: StorageCardInfo[],
  isDifficultWords: boolean
};

export type StorageCardInfo = {
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
  wrong: number
};

export const data: DataType = {
  gameMode: false,
  categoryIndex: 0,
  arrayOfIndexes: [],
  lastIndex: -1,
  numberOfMistakes: 0,
  gameEndTime: 300000,
  lastAnswer: false,
  startGame: false,
  cardsArray: [],
  DIFFICULT_WORD_QUANTITY: 8,
  wrongWordCardsInfo: [],
  isDifficultWords: false,
};
