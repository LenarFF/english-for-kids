import { BaseComponent } from '../../../base-component';
import { AdminWordCard } from '../admin-word-card';
import './empty-word-card.css';

export class EmptyWordCard extends AdminWordCard {
  cardTitle: BaseComponent;

  bigCross: BaseComponent;

  constructor() {
    super();
    this.cardTitle = new BaseComponent('h3', ['admin__word-card-title']);
    this.bigCross = new BaseComponent('div', ['word-card__cross']);

    this.cardTitle.element.innerHTML = 'Add new word';
    this.element.append(this.cardTitle.element, this.bigCross.element);
  }
}
