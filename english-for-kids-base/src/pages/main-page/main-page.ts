import { BaseComponent } from "../../components/base-component";
import { CategoryCard } from "../../components/card/category-card/category-card";
import { cards, categoryCardsInfo } from '../../cards';
import './main-page.css'

export class MainPage extends BaseComponent {
  categoryInfo: string[][]
  constructor() {
    super('div', ['main-page']);
    this.categoryInfo = categoryCardsInfo;
  }

  renderCards() {
    for (let i = 0; i < categoryCardsInfo[0].length; i++){
      const categoryCard = new CategoryCard(categoryCardsInfo[1][i], categoryCardsInfo[0][i]);
      this.element.append(categoryCard.element)
    }
  }
}