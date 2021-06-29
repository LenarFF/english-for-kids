import { BaseComponent } from '../base-component';
import './toggle.css';

export class Toggle extends BaseComponent {
  constructor() {
    super('input', ['switch']);
    (this.element as HTMLInputElement).type = 'checkbox';
  }
}
