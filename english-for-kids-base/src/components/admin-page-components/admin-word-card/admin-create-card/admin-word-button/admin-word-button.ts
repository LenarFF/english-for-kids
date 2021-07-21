import { BaseComponent } from '../../../../base-component';
import './admin-word-button.css';

export class AdminWordButton extends BaseComponent {
  constructor(text: string, styles: string[] = []) {
    super('button', ['admin__word-button']);
    this.element.innerHTML = `${text}`;
    this.element.classList.add(...styles);
  }
}
