import { CategoryCreateCard } from
  '../../../components/admin-page-components/admin-category-card/category-create-card/category-create-card';
import { CategoryEmptyCard } from
  '../../../components/admin-page-components/admin-category-card/category-empty-card/category-empty-card';
import { CategoryReadyCards } from
  '../../../components/admin-page-components/admin-category-card/category-ready-card/category-ready-card';
import { BaseComponent } from '../../../components/base-component';
import { createCategory, deleteCategory, getCategories } from '../../../server';
import { Category } from '../../../types';
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

    this.createAllCategories();
    this.element.append(
      this.categoryEmptyCard.element,
      this.categoryCreateCard.element,
    );
    this.element.addEventListener('click', (e) => this.deleteCategory(e));
    this.categoryCreateCard.createButton.element
    .addEventListener('click', () => this.createNewCategory())
  }

  async createAllCategories(): Promise<void> {
    await getCategories().then((data) => {
      data.forEach((item: Category) => {
        const categoryCard = new CategoryReadyCards(item.name, item.wordsQuantity);
        categoryCard.element.id = String(item.id);
        this.element.prepend(categoryCard.element);
      });
    });
  }

  deleteCategory = (e: Event): void => {
    const smallCross = e.target as HTMLElement;
    if (smallCross.classList.contains('small-cross')) {
      const id = Number(smallCross.parentElement?.id);
      smallCross.parentElement?.remove();
      deleteCategory(id);
    }
  };

  createNewCategory = (): void => {
    let input = this.categoryCreateCard.input.element as HTMLInputElement;
    createCategory({
      id: 0,
      name: input.value,
      wordsQuantity: 0
    })
    const categoryCard = new CategoryReadyCards(input.value, 0);
    this.element.prepend(categoryCard.element);
    input.value = '';
  }
}
