import { BaseComponent } from '../../base-component';
import './admin-category-card.css';

export class AdminCategoryCard extends BaseComponent {
  constructor(styles: string[] = []) {
    super('div', ['admin__category-card']);
    this.element.classList.add(...styles);
  }
}
