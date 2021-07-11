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
    data.gameMode = data.gameMode === false;
    this.game.transformCard();
    this.toggleStartButton();
    this.changeCardColor();
    data.arrayOfIndexes = [];
    data.numberOfMistakes = 0;
    if (!data.gameMode) {
      this.hideCarsShield();
      this.hideStars();
    }
  }

  toggleStartButton = (): void => {
    const startButton = document.querySelector('.start-button');
    if (startButton) {
      startButton.classList.toggle('start-button_hide');
      startButton.classList.remove('start-button_repeat');
      startButton.innerHTML = 'start game';
    }
  };

  changeCardColor = (): void => {
    const cards = document.querySelectorAll('.category-card__top');
    if (cards) cards.forEach((card) => card.classList.toggle('category-card__top_orange'));
  };

  hideCarsShield = (): void => {
    data.cardsArray.forEach((wordCard) => {
      wordCard.cardShield.element.classList.add('hidden');
    });
  };

  hideStars = (): void => {
    const starsField = document.querySelector('.stars-field');
    if (starsField) starsField.innerHTML = '';
  };
}
