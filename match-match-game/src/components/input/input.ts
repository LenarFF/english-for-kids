import { BaseComponent } from '../base-component';
import './input.css'

export class Label extends BaseComponent {
  constructor(forInput: string, text: string) {
    super('label', ['label']);
    (this.element as HTMLLabelElement).htmlFor = forInput;
    this.element.innerHTML = `${text}`
  }
}


export class Input extends BaseComponent {
  constructor(type: string, placeholder: string) {
    super('input', ['input']);
    (this.element as HTMLInputElement).type = type;
    (this.element as HTMLInputElement).placeholder = placeholder;
  }
}