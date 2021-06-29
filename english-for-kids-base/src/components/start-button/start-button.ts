import { BaseComponent } from '../base-component';
import './start-button.css';

export class StartButton extends BaseComponent {
  constructor() {
    super('button', ['start-button']);
    this.element.innerHTML = 'start game';
    this.element.addEventListener('click', () => this.startGame());
  }

  startGame(): void {
    this.transformButton();
  }

  transformButton(): void {
    this.element.innerHTML = '';
    this.element.classList.add('start-button_repeat');
  }

  repeatWord():void {

  }
}
