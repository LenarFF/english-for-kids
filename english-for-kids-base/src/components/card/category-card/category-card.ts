import { BaseComponent } from '../../base-component';
import './category-card.css';

export class CategoryCard extends BaseComponent {
  constructor(img: string, categoryText: string) {
    super('div', ['category-card']);
    this.element.innerHTML = `
      <div class="category-card__top"></div>
      <div class="category-card__bot"></div>
      <div class="category-card__image" style="background-image: url('./images/unsorted/${img}')"></div>
      <p class="category-card__text">${categoryText}</p>
    `;
  }
}
