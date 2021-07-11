import { categoryCardsInfo, wordCardsInfo } from './cardsInfo';
import { data } from './data';
import { WordStatsType } from './types';

type CardInfo = {
  category: string;
  translation: string;
  train: number;
  game: number;
  right: number;
  wrong: number;
  audioSrc: string;
  image: string;
};

export class LocalStorage {
  createStorage = (): void => {
    if (localStorage.getItem(wordCardsInfo[0][0].word)) return;
    for (let i = 0; i < wordCardsInfo.length; i++) {
      const category = categoryCardsInfo[0][i];
      for (let j = 0; j < wordCardsInfo[i].length; j++) {
        const word = `efk-${wordCardsInfo[i][j].word}`;
        const { translation } = wordCardsInfo[i][j];
        const { audioSrc } = wordCardsInfo[i][j];
        const { image } = wordCardsInfo[i][j];
        const cardInfo: CardInfo = {
          category,
          translation,
          train: 0,
          game: 0,
          right: 0,
          wrong: 0,
          audioSrc,
          image,
        };
        localStorage.setItem(word, JSON.stringify(cardInfo));
      }
    }
  };

  updateStorage = (cardNumber: number, propertyToUpdate: string): void => {
    if (cardNumber) {
      const cardInfo = wordCardsInfo[data.categoryIndex][cardNumber];
      const wordStat = localStorage.getItem(`efk-${cardInfo.word}`);
      if (wordStat) {
        const wordStatObj = JSON.parse(wordStat);
        wordStatObj[`${propertyToUpdate}`]++;
        localStorage.setItem(`efk-${cardInfo.word}`, JSON.stringify(wordStatObj));
      }
    }
  };

  getItems = (): { words: string[]; items: WordStatsType[] } => {
    const items = [];
    const words = [];
    for (let i = 0; i < localStorage.length; i++) {
      const word = localStorage.key(i) as string;
      if (word.slice(0, 4) === 'efk-') {
        const wordStatStringify = localStorage.getItem(word);
        if (wordStatStringify) {
          const wordStat = JSON.parse(wordStatStringify);
          items.push(wordStat);
          words.push(word);
        }
      }
    }

    return { words, items };
  };
}
