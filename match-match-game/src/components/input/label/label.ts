import { BaseComponent } from '../../base-component';
import './label.css';

export class Label extends BaseComponent {
  constructor(forInput: string, text: string) {
    super('label', ['label']);
    (this.element as HTMLLabelElement).htmlFor = forInput;
    this.element.innerHTML = `${text}`;
  }
}
