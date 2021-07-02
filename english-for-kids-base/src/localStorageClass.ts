import { categoryCardsInfo, wordCardsInfo } from './cardsInfo';
import { data } from './data';

type CardInfo = {
  'category': string,
  'translation': string,
  'train': number,
  'game': number,
  'right': number,
  'wrong': number,
};

export class LocalStorage {
  createStorage = (): void => {
    for (let i = 0; i < wordCardsInfo.length; i++) {
      const category = categoryCardsInfo[0][i];
      for (let j = 0; j < wordCardsInfo[i].length; j++) {
        const { word } = wordCardsInfo[i][j];
        if (localStorage.getItem(word)) return;
        const { translation } = wordCardsInfo[i][j];
        const cardInfo: CardInfo = {
          category,
          translation,
          train: 0,
          game: 0,
          right: 0,
          wrong: 0,
        };
        localStorage.setItem(word, JSON.stringify(cardInfo));
      }
    }
  };

  updateStorage = (cardNumber: number, propertyToUpdate: string): void => {
    if (cardNumber) {
      const cardInfo = wordCardsInfo[data.categoryIndex][cardNumber];
      const wordStat = localStorage.getItem(cardInfo.word);
      if (wordStat) {
        const wordStatObj = JSON.parse(wordStat);
        wordStatObj[`${propertyToUpdate}`]++;
        localStorage.setItem(cardInfo.word, JSON.stringify(wordStatObj));
      }
    }
  };
}
