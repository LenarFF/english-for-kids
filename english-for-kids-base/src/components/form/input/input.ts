import { BaseComponent } from '../../base-component';
import './input.css';

export class Input extends BaseComponent {
  constructor(type: string, placeholder: string, id: string, className?: string) {
    super('input', ['input']);
    this.element.classList.add(`${className}`);
    (this.element as HTMLInputElement).type = type;
    (this.element as HTMLInputElement).placeholder = placeholder;
    this.element.id = id;
  }
}
