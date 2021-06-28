import { CategoryPage } from '../../../pages/category-page/category-page';
import { BaseComponent } from '../../base-component';
import './category-card.css';

export class CategoryCard extends BaseComponent {
  constructor(img: string, categoryText: string) {
    super('div', ['category-card']);
    this.element.innerHTML = `
      <div class="category-card__top"></div>
      <div class="category-card__bot"></div>
      <div class="category-card__image" style="background-image: url('./${img}')"></div>
      <p class="category-card__text">${categoryText}</p>
    `;
    this.element.addEventListener('click', () => this.goToCategory());
  }

  goToCategory(): void {
    const mainPage = document.querySelector('.page');
    const dataNumber = this.element.getAttribute('data-number') as string;
    const categoryPage = new CategoryPage(+dataNumber);
    categoryPage.renderCards();
    mainPage?.replaceWith(categoryPage.element);
  }
}
