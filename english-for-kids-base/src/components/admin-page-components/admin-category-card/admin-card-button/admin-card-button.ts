import { BaseComponent } from '../../../base-component';
import './admin-card-button.css';

export class AdminCardButton extends BaseComponent {
  constructor(text: string, styles: string[] = []) {
    super('button', ['admin__card-button']);
    this.element.classList.add(...styles);
    this.element.innerHTML = `${text}`;
  }
}
