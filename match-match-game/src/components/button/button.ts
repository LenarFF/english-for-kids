import { BaseComponent } from '../base-component';
import './button.css';

export class Button extends BaseComponent {
  constructor() {
    super('button', ['stop-button'])

  this.element.innerHTML = `
  <p class='button__text'>Stop Game</p>
  `
}
}