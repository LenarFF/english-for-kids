import { wordCardsInfo } from '../../cardsInfo';
import { BaseComponent } from '../../components/base-component';
import { WordCard } from '../../components/card/word-card/word-card';
import '../main-page/main-page.css';

export class CategoryPage extends BaseComponent {
  wordInfo: {
    word: string,
    translation: string,
    image: string,
    audioSrc: string
  }[][];

  categoryNumber: number;

  constructor(categoryNumber: string) {
    super('div', ['page']);

    this.categoryNumber = +categoryNumber;
    this.wordInfo = wordCardsInfo;
  }

  renderCards(): void {
    for (let i = 0; i < wordCardsInfo[this.categoryNumber].length; i++) {
      const wordCard = new WordCard(this.wordInfo[this.categoryNumber][i].image,
        this.wordInfo[this.categoryNumber][i].word,
        this.wordInfo[this.categoryNumber][i].translation);

      wordCard.wordCardFront.element.setAttribute('data-word',
        `${this.wordInfo[this.categoryNumber][i].word}`);

      this.element.append(wordCard.element);
    }
  }
}
