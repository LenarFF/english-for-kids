import { BaseComponent } from '../../base-component';
import './admin-word-card.css';

export class AdminWordCard extends BaseComponent {
  constructor(styles: string[] = []) {
    super('div', ['admin__word-card']);
    this.element.classList.add(...styles);
  }
}
