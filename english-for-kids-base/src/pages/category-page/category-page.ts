import { wordCardsInfo } from "../../cards";
import { BaseComponent } from "../../components/base-component";
import { WordCard } from "../../components/card/word-card/word-card";
import '../main-page/main-page.css'

export class CategoryPage extends BaseComponent {
  wordInfo: {
    word: string,
    translation: string,
    image: string,
    audioSrc: string
    }[][];

  constructor() {
    super('div', ['page']);
    this.wordInfo = wordCardsInfo;
  }

  renderCards(): void {
    for (let i = 0; i < wordCardsInfo[0].length; i++) {
      const wordCard = new WordCard(this.wordInfo[0][i].image, this.wordInfo[0][i].word, this.wordInfo[0][i].translation);
      this.element.append(wordCard.element)
  }
}
}