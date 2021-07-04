import { BaseComponent } from '../../components/base-component';
import { CategoryCard } from '../../components/card/category-card/category-card';
import { categoryCardsInfo } from '../../cardsInfo';
import './main-page.css';

export class MainPage extends BaseComponent {
  categoryInfo: string[][];

  constructor() {
    super('div', ['main-page', 'page']);
    this.categoryInfo = categoryCardsInfo;
  }

  renderCards(): void {
    for (let i = 0; i < categoryCardsInfo[0].length - 1; i++) {
      const categoryCard = new CategoryCard(categoryCardsInfo[1][i], categoryCardsInfo[0][i]);
      categoryCard.element.setAttribute('data-number', `${i}`);
      this.element.append(categoryCard.element);
    }
  }
}
