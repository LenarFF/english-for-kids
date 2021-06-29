import { data } from '../../data';
import { Game } from '../../game';
import { BaseComponent } from '../base-component';
import './toggle.css';

export class Toggle extends BaseComponent {
  game: Game;

  constructor() {
    super('input', ['switch']);

    (this.element as HTMLInputElement).type = 'checkbox';

    this.game = new Game();

    this.element.addEventListener('click', () => this.switchToGame());
  }

  switchToGame(): void {
    data.gameMode = (data.gameMode === false);
    this.game.transformCard();
    this.toggleStartButton();
  }

  toggleStartButton = ():void => {
    const startButton = document.querySelector('.start-button');
    if (startButton) {
      startButton.classList.toggle('start-button_hide');
      startButton.classList.remove('start-button_repeat');
      startButton.innerHTML = 'start game';
    }
  };
}
