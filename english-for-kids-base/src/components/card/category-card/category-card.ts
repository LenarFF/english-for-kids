import { data } from '../../../data';
import { BaseComponent } from '../../base-component';
import './category-card.css';

export class CategoryCard extends BaseComponent {
  constructor(img: string, categoryText: string) {
    super('div', ['category-card']);
    this.element.innerHTML = `
      <div class="category-card__top ${data.gameMode
    ? 'category-card__top_orange' : ''}"></div>
      <div class="category-card__bot"></div>
      <div class="category-card__image" style="background-image: url('./${img}')"></div>
      <p class="category-card__text">${categoryText}</p>
    `;
    this.element.addEventListener('click', () => this.goToCategory());
  }

  goToCategory(): void {
    const dataNumber = this.element.getAttribute('data-number') as string;
    data.categoryIndex = Number(dataNumber);
    window.location.hash = `#/category-page/${dataNumber}`;
    const startButton = document.querySelector('.start-button');
    if (data.gameMode && startButton) startButton.classList.remove('start-button_hide');
  }
}
