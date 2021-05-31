import { delay } from '../../shared/delay';
import { BaseComponent } from '../base-component';
import { Card } from '../card/card';
import { CardsField } from '../game-field/cards-field';
import { Timer } from '../timer/timer';
import './game.css';
import { settings } from '../../settings';
import { user } from '../../user';

export class Game extends BaseComponent {
  cardsField: CardsField;

  timer: Timer;

  activeCard?: Card;

  isAnimation = false;

  comparisonCounter: number;

  constructor() {
    super();

    this.cardsField = new CardsField();
    this.timer = new Timer();
    this.comparisonCounter = 0;

    this.element.appendChild(this.timer.element);
    this.element.appendChild(this.cardsField.element);
    document.querySelector('.stop-button')?.addEventListener('click', () => {
      console.log(this.points);
      user.point = this.points;
    });
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
    // if (!settings.startGame === false) return
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
      this.activeCard.element.classList.add('red');
      card.element.classList.add('red');
      this.comparisonCounter--;
      await delay(settings.FLIP_DELAY);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
      this.activeCard.element.classList.remove('red');
      card.element.classList.remove('red');
    } else {
      this.activeCard.element.classList.add('green');
      card.element.classList.add('green');
      this.comparisonCounter++;
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }

  get points() {
    return this.comparisonCounter * 100 - this.timer.timeCounter * 10;
  }
}
