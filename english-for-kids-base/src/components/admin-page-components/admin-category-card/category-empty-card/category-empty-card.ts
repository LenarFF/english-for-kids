import { BaseComponent } from '../../../base-component';
import { AdminCategoryCard } from '../admin-category-card';
import './category-empty-card.css';

export class CategoryEmptyCard extends AdminCategoryCard {
  bigCross: BaseComponent;

  cardTitle: BaseComponent;

  constructor() {
    super();
    this.bigCross = new BaseComponent('div', ['big-cross']);
    this.cardTitle = new BaseComponent('h4', ['admin__card-title']);
    this.cardTitle.element.innerHTML = 'Create new Category';

    this.element.append(this.cardTitle.element, this.bigCross.element);
  }
}
