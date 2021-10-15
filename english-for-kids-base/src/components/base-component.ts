export class BaseComponent {
  element: HTMLElement;

  constructor(tag: keyof HTMLElementTagNameMap = 'div', styles: string[] = []) {
    this.element = document.createElement(tag) as HTMLElement;
    this.element.classList.add(...styles);
  }
}
