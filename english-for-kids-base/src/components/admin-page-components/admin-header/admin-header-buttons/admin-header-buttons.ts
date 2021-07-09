import { BaseComponent } from '../../../base-component';
import './admin-header-buttons.css';

export class AdminHeaderButtons extends BaseComponent {
  constructor(text: string) {
    super('button', ['admin__header-button']);
    this.element.innerHTML = `${text}`;
  }
}
