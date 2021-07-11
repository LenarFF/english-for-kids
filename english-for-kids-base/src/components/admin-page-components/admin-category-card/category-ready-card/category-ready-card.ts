import { BaseComponent } from '../../../base-component';
import { AdminCardButton } from '../admin-card-button/admin-card-button';
import { AdminCategoryCard } from '../admin-category-card';
import './category-ready-card.css';

export class CategoryReadyCards extends AdminCategoryCard {
  wordsCount: BaseComponent;

  buttonWrap: BaseComponent;

  updateButton: AdminCardButton;

  addButton: AdminCardButton;

  cross: BaseComponent;

  cardTitle: BaseComponent;

  constructor(cardName: string, wordsQuantity: number) {
    super();

    this.cardTitle = new BaseComponent('h4', ['admin__card-title']);
    this.wordsCount = new BaseComponent('div', ['admin__words-count']);
    this.buttonWrap = new BaseComponent('div', ['admin__card-buttons']);
    this.updateButton = new AdminCardButton('Update');
    this.addButton = new AdminCardButton('Add word');
    this.cross = new BaseComponent('div', ['small-cross']);

    this.cardTitle.element.innerHTML = `${cardName}`;
    this.buttonWrap.element.append(this.updateButton.element,
      this.addButton.element);
    this.wordsCount.element.innerHTML = `
    <p class="admin__category-word">words:
    <span class="admin__words-counter">${wordsQuantity}</span>
    </p>
    `;

    this.element.append(
      this.cardTitle.element,
      this.wordsCount.element,
      this.buttonWrap.element,
      this.cross.element,
    );
    this.addButton.element.addEventListener('click', () => this.hashChange());
  }

  hashChange = (): void => {
    window.location.hash = '#/admin-words/';
  };
}
