export type WordStatsType = {
  category: string;
  translation: string;
  train: number;
  game: number;
  right: number;
  wrong: number;
  image: string;
  audioSrc: string;
  word: string;
};

export type Category = {
  id: number;
  name: string;
  wordsQuantity: number;
};

export type Word = {
  wordValue: string;
  translation: string;
  audioSrc?: string;
  image?: string;
  categoryId: number;
  wordId: number;
}
