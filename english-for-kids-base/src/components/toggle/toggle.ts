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
  }
}
