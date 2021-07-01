import { wordCardsInfo } from '../../cardsInfo';
import { data } from '../../data';
import { Game } from '../../game';
import { BaseComponent } from '../base-component';
import './start-button.css';

export class StartButton extends BaseComponent {
  game: Game;

  constructor() {
    super('button', ['start-button', 'start-button_hide']);
    this.element.innerHTML = 'start game';
    this.game = new Game();
    this.element.addEventListener('click', () => {
      if (this.element.classList.contains('start-button_repeat')) {
        this.game.playSound(data.lastIndex);
      } else {
        this.startGame();
      }
    });
  }

  startGame(): void {
    this.transformButton();
    this.game.fillArrayOfIndexes(wordCardsInfo[data.categoryIndex]);
    this.game.playRandomSound();
    data.startGame = true;
  }

  transformButton(): void {
    this.element.innerHTML = '';
    this.element.classList.add('start-button_repeat');
  }
}
