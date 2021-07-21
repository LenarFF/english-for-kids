import { AdminCreateCard } from
  '../../../components/admin-page-components/admin-word-card/admin-create-card/admin-create-card';
import { AdminReadyCard } from
  '../../../components/admin-page-components/admin-word-card/admin-ready-card/admin-ready-card';
import { EmptyWordCard } from
  '../../../components/admin-page-components/admin-word-card/empty-word-card/empty-word-card';
import { BaseComponent } from
  '../../../components/base-component';
import { getWordsByCategory } from '../../../server';
import './admin-word-page.css';

export class AdminWordPage extends BaseComponent {
  emptyCard: EmptyWordCard;

  createCard: AdminCreateCard;


  constructor(categoryId: number) {
    super('div', ['admin__word-page']);
    this.renderCards(categoryId);
    this.emptyCard = new EmptyWordCard();
    this.createCard = new AdminCreateCard();
    this.element.append(this.emptyCard.element, this.createCard.element);
  }

  async renderCards(categoryId: number): Promise<void> {
    await getWordsByCategory(categoryId).then(data => {
      data.forEach(word => {
        const card = new AdminReadyCard(word.wordValue, word.translation, word.audioSrc, word.image);
        this.element.prepend(card.element)
      })
    })

  }
}
