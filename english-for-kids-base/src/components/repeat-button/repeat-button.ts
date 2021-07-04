import { BaseComponent } from '../base-component';
import './repeat-button.css';

export class RepeatButton extends BaseComponent {
  constructor() {
    super('button', ['statistics__button', 'statistics__repeat-button']);
    this.element.innerHTML = 'Repeat difficult words';
  }
}
