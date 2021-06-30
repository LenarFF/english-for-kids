import { wordCardsInfo } from '../../cardsInfo';
import { BaseComponent } from '../../components/base-component';
import { WordCard } from '../../components/card/word-card/word-card';
import { StartButton } from '../../components/start-button/start-button';
import './category-page.css';

export class CategoryPage extends BaseComponent {
  wordInfo: {
    word: string,
    translation: string,
    image: string,
    audioSrc: string
  }[][];

  categoryNumber: number;

  startButton: StartButton;

  cardField: BaseComponent;

  starsField: BaseComponent;

  constructor(categoryNumber: number) {
    super('div', ['category', 'page']);

    this.startButton = new StartButton();
    this.starsField = new BaseComponent('div', ['stars-field']);
    this.cardField = new BaseComponent('div', ['card-field']);

    this.categoryNumber = categoryNumber;
    this.wordInfo = wordCardsInfo;

    this.element.append(this.starsField.element);
    this.element.append(this.cardField.element);
    this.element.append(this.startButton.element);
  }

  renderCards(): void {
    for (let i = 0; i < wordCardsInfo[this.categoryNumber].length; i++) {
      const wordCard = new WordCard(this.wordInfo[this.categoryNumber][i].image,
        this.wordInfo[this.categoryNumber][i].word,
        this.wordInfo[this.categoryNumber][i].translation);

      wordCard.wordCardFront.element.setAttribute('data-word',
        `${this.wordInfo[this.categoryNumber][i].word}`);

      wordCard.wordCardFront.element.setAttribute('data-number', `${i}`);

      this.cardField.element.append(wordCard.element);
    }
  }
}
