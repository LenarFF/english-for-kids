import './cards-field.css';
import { BaseComponent } from '../base-component';
import { Card } from '../card/card';
import { settings } from '../../settings';

export class CardsField extends BaseComponent {
  private cards: Card[] = [];

  constructor() {
    super('div', ['cards-field']);
  }

  clear() {
    this.cards = [];
    this.element.innerHTML = '';
  }

  addCards(cards: Card[]) {
    this.cards = cards.slice(0, settings.complexity);
    this.cards.forEach((card) => this.element.appendChild(card.element));

    this.cards.forEach((card) => card.flipToFront());
    setTimeout(() => {
      this.cards.forEach((card) => card.flipToBack());
    }, settings.SHOW_TIME * 1000);
  }
}
