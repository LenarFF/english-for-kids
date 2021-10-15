import { BaseComponent } from './components/base-component';

type Card = {
  cardShield: BaseComponent;
};

type DataType = {
  gameMode: boolean;
  categoryIndex: number;
  arrayOfIndexes: number[];
  lastIndex: number;
  numberOfMistakes: number;
  gameEndTime: number;
  lastAnswer: boolean;
  startGame: boolean;
  cardsArray: Card[];
  difficultWordQuantity: number;
  wrongWordCardsInfo: StorageCardInfo[];
  isDifficultWords: boolean;
  isMenuShow: boolean;
  passwordValidateResult: string;
  loginValidateResult: string;
  authorized: boolean;
};

export type StorageCardInfo = {
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
  wrong: number;
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
  difficultWordQuantity: 8,
  wrongWordCardsInfo: [],
  isDifficultWords: false,
  isMenuShow: false,
  passwordValidateResult: 'enter password',
  loginValidateResult: 'enter login',
  authorized: false,
};
