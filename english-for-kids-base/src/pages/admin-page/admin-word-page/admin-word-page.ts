import { AdminCreateCard } from
  '../../../components/admin-page-components/admin-word-card/admin-create-card/admin-create-card';
import { AdminReadyCard } from
  '../../../components/admin-page-components/admin-word-card/admin-ready-card/admin-ready-card';
import { EmptyWordCard } from
  '../../../components/admin-page-components/admin-word-card/empty-word-card/empty-word-card';
import { BaseComponent } from
  '../../../components/base-component';
import './admin-word-page.css';

export class AdminWordPage extends BaseComponent {
  emptyCard: EmptyWordCard;

  createCard: AdminCreateCard;

  readyCard: AdminReadyCard;

  constructor() {
    super('div', ['admin__word-page']);
    this.emptyCard = new EmptyWordCard();
    this.createCard = new AdminCreateCard();
    this.readyCard = new AdminReadyCard('word', 'trans', 'dgd', 'dfg');
    this.element.append(this.readyCard.element, this.emptyCard.element, this.createCard.element);
  }
}
