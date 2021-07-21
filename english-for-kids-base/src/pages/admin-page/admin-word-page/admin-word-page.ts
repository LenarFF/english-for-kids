import { AdminCreateCard } from
  '../../../components/admin-page-components/admin-word-card/admin-create-card/admin-create-card';
import { AdminReadyCard } from
  '../../../components/admin-page-components/admin-word-card/admin-ready-card/admin-ready-card';
import { EmptyWordCard } from
  '../../../components/admin-page-components/admin-word-card/empty-word-card/empty-word-card';
import { BaseComponent } from
  '../../../components/base-component';
import { createWord, deleteWord, getWordsByCategory } from '../../../server';
import './admin-word-page.css';

export class AdminWordPage extends BaseComponent {
  emptyCard: EmptyWordCard;

  createCard: AdminCreateCard;


  constructor(categoryId: number) {
    super('div', ['admin__word-page']);
    this.renderCards(categoryId);
    this.emptyCard = new EmptyWordCard();
    this.createCard = new AdminCreateCard();
    this.element.append(this.createCard.element, this.emptyCard.element, );

    this.element.addEventListener('click', (e) => {
      this.deleteWordCard(e);

    this.emptyCard.bigCross.element.addEventListener('click', () => this.showCreateCard())
    });

    this.createCard.addButton.element.addEventListener('click', () => this.createNewWord());
    this.createCard.cancelButton.element.addEventListener('click', () => {
      this.clearInputs([this.createCard.wordInput.element as HTMLInputElement,
      this.createCard.translationInput.element as HTMLInputElement]);
      this.hideCreateCard();
    })
  }

  async renderCards(categoryId: number): Promise<void> {
    await getWordsByCategory(categoryId).then(data => {
      data.forEach(word => {
        const card = new AdminReadyCard(word.wordValue, word.translation, word.audioSrc, word.image);
        card.element.id = word.wordValue;
        this.element.prepend(card.element);
      });
    })
  }
  deleteWordCard = (e: Event): void => {
    const smallCross = e.target as HTMLElement;
    if (smallCross.classList.contains('small-cross')) {
      const word = smallCross.parentElement?.id;
      if(!word) return
      smallCross.parentElement?.remove();
      deleteWord(word);
    }
  };

  createNewWord = (): void => {
    const wordInput = this.createCard.wordInput.element as HTMLInputElement;
    const translationInput = this.createCard.translationInput.element as HTMLInputElement;
    if (!wordInput.value || !translationInput) {
            return;
    }
    createWord({
      wordValue: wordInput.value,
      translation: translationInput.value,
      categoryId: Number(window.location.hash.split('!')[1]),
    });
    const wordCard = new AdminReadyCard(wordInput.value, translationInput.value);
    wordCard.element.id = wordInput.value;
    this.element.prepend(wordCard.element);
    wordInput.value = '';
    translationInput.value = '';
    this.createCard.element.classList.add('hidden');
  };

  showCreateCard = ():void => {
    this.createCard.element.classList.remove('hidden');
  }

  hideCreateCard = ():void => {
    this.createCard.element.classList.add('hidden');
  }

  clearInputs = (inputs: HTMLInputElement[]): void => {
    inputs.forEach(input => input.value = '')
  }
}
