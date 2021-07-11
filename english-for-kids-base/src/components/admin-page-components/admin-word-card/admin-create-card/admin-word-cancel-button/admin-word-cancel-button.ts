import { BaseComponent } from '../../../../base-component';
import './admin-word-cancel-button.css';

export class AdminWordCancelButton extends BaseComponent {
  constructor() {
    super('button', ['admin__word-cancel-button']);
    this.element.innerHTML = 'Cancel';
  }
}
