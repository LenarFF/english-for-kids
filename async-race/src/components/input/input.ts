import { BaseComponent } from '../BaseComponent/BaseComponent';
import './input.css';

export class Input extends BaseComponent {
  constructor(type: string, id: string) {
    super('input', ['input']);
    (this.element as HTMLInputElement).type = type;
    this.element.id = id;
  }
}
