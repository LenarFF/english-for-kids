import { BaseComponent } from '../BaseComponent/BaseComponent';
import './buttons.css';

export class Buttons extends BaseComponent {
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

  buttonHandler() {}
}
