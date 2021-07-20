import { CategoryCreateCard } from
  '../../../components/admin-page-components/admin-category-card/category-create-card/category-create-card';
import { CategoryEmptyCard } from
  '../../../components/admin-page-components/admin-category-card/category-empty-card/category-empty-card';
import { CategoryReadyCard } from
  '../../../components/admin-page-components/admin-category-card/category-ready-card/category-ready-card';
import { BaseComponent } from '../../../components/base-component';
import {
  createCategory, deleteCategory, getCategories, updateCategory,
} from '../../../server';
import { Category } from '../../../types';
import './admin-category-page.css';

export class AdminCategoryPage extends BaseComponent {
  categoryCard: CategoryReadyCard;

  categoryEmptyCard: CategoryEmptyCard;

  categoryCreateCard: CategoryCreateCard;

  constructor() {
    super('div', ['admin__category-page']);

    this.categoryCard = new CategoryReadyCard('cats', 8);
    this.categoryEmptyCard = new CategoryEmptyCard();
    this.categoryCreateCard = new CategoryCreateCard();

    this.createAllCategories();
    this.element.append(
      this.categoryEmptyCard.element,
      this.categoryCreateCard.element,
    );
    this.element.addEventListener('click', (e) => {
      this.deleteCategory(e);
      this.updateOldCategory(e);
    });
    this.categoryCreateCard.createButton.element
      .addEventListener('click', () => this.createNewCategory());
  }

  async createAllCategories(): Promise<void> {
    await getCategories().then((data) => {
      data.forEach((item: Category) => {
        const categoryCard = new CategoryReadyCard(item.name, item.wordsQuantity);
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
    const input = this.categoryCreateCard.input.element as HTMLInputElement;
    if (!input.value) {
      input.setCustomValidity('enter category name');
      return;
    }
    createCategory({
      id: 0,
      name: input.value,
      wordsQuantity: 0,
    });
    const categoryCard = new CategoryReadyCard(input.value, 0);
    this.element.prepend(categoryCard.element);
    input.value = '';
  };

  updateOldCategory = (e: Event): void => {
    const updateButton = e.target as HTMLElement;
    if (!updateButton.classList.contains('admin__update-card-button')) return;
    const categoryCard = updateButton.parentElement?.parentElement;
    if (!categoryCard) return;
    const { id } = categoryCard;
    const name = categoryCard.firstChild?.textContent as string;
    const wordsQuantity = Number(categoryCard.querySelector('.admin__words-counter')?.textContent);
    const categoryCreateCard = new CategoryCreateCard();
    const createCardElement = categoryCreateCard.element;
    categoryCard.replaceWith(createCardElement);

    categoryCreateCard.cancelButton.element.addEventListener('click',
      () => this.createCard(name, wordsQuantity, id, createCardElement));

    categoryCreateCard.createButton.element
      .addEventListener('click', () => {
        const newName = (categoryCreateCard.input.element as HTMLInputElement).value;
        if (!newName) return;
        this.createCard(newName, wordsQuantity, id, createCardElement);
        updateCategory({
          id: Number(id),
          name: newName,
          wordsQuantity,
        });
      });
  };

  createCard = (name: string, wordsQuantity: number, id: string, createCardElement: HTMLElement): void => {
    const card = new CategoryReadyCard(name, wordsQuantity);
    card.element.id = id;
    createCardElement.replaceWith(card.element);
  };
}
