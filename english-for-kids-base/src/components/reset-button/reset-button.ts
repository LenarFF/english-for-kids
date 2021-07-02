import { BaseComponent } from '../base-component';
import './reset-button.css';

export class ResetButton extends BaseComponent {
  constructor() {
    super('button', ['statistics__reset-button']);
    this.element.innerHTML = 'reset';
  }
}
