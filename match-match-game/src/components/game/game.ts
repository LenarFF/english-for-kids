import { delay } from '../../shared/delay';
import { BaseComponent } from '../base-component';
import { Card } from '../card/card';
import { CardsField } from '../game-field/cards-field';
import { Timer } from '../timer/timer';
import { Header } from '../header/header';
import './game.css';
import { settings } from '../../settings';

export class Game extends BaseComponent {
  cardsField: CardsField;

  timer: Timer;

  activeCard?: Card;

  isAnimation = false;

  constructor() {
    super('main', ['wrapper']);
    this.cardsField = new CardsField();
    this.timer = new Timer();
    this.element.appendChild(this.timer.element);
    this.element.appendChild(this.cardsField.element);
  }

  newGame(images: string[]) {
    this.cardsField.clear();
    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);

    cards.forEach((card) => {
      card.element.addEventListener('click', () => this.cardHandler(card));
    });

    this.cardsField.addCards(cards);
    this.timer.timerInterval(settings.SHOW_TIME);
  }

  async cardHandler(card: Card) {
    if (this.isAnimation) return;
    if (!card.isFlipped) return;
    this.isAnimation = true;

    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image !== card.image) {
      await delay(settings.FLIP_DELAY);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }
}
