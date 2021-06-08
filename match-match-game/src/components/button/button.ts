import { BaseComponent } from '../base-component';
import './button.css';

export class Button extends BaseComponent {
  constructor(buttonText: string, styles: string[] = []) {
    super('button', ['button', 'box-shadow']);

    this.element.innerHTML = `
  <p class='button__text'>${buttonText}</p>
  `;
    this.element.classList.add(...styles);
    this.element.addEventListener('click', (evt) => {
      evt.preventDefault();
      this.buttonHandler();
    });
  }

  buttonHandler(): void {
    const forLinter = this.element;
  }
}
