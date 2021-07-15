import { CategoryCreateCard } from
  '../../../components/admin-page-components/admin-category-card/category-create-card/category-create-card';
import { CategoryEmptyCard } from
  '../../../components/admin-page-components/admin-category-card/category-empty-card/category-empty-card';
import { CategoryReadyCards } from
  '../../../components/admin-page-components/admin-category-card/category-ready-card/category-ready-card';
import { BaseComponent } from '../../../components/base-component';
import './admin-category-page.css';

export class AdminCategoryPage extends BaseComponent {
  categoryCard: CategoryReadyCards;

  categoryEmptyCard: CategoryEmptyCard;

  categoryCreateCard: CategoryCreateCard;

  constructor() {
    super('div', ['admin__category-page']);
    this.categoryCard = new CategoryReadyCards('cats', 8);
    this.categoryEmptyCard = new CategoryEmptyCard();
    this.categoryCreateCard = new CategoryCreateCard();

    this.element.append(
      this.categoryCard.element,
      this.categoryEmptyCard.element,
      this.categoryCreateCard.element,
    );
  }
}
