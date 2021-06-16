import './input.css';

export class Input {
  readonly element: HTMLInputElement;

  constructor(
    type: string,
    id: string,
    tag: keyof HTMLElementTagNameMap = 'input',
    styles: string[] = ['input'],
  ) {
    this.element = document.createElement(tag) as HTMLInputElement;
    this.element.classList.add(...styles);
    (this.element as HTMLInputElement).type = type;
    this.element.id = id;
  }
}
