import { BaseComponent } from '../base-component';
import './button.css';

export class Button extends BaseComponent {
  constructor(buttonText: string, styles: string[] = []) {
    super('button', ['hide-button']);

    this.element.innerHTML = `
  <p class='button__text'>${buttonText}</p>
  `;
  this.element.classList.add(...styles)
  this.element.addEventListener('click', () => this.buttonHandler())
  }

  buttonHandler() {
  }
}
