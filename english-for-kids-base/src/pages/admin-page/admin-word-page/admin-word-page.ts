import { AdminCreateCard } from
  '../../../components/admin-page-components/admin-word-card/admin-create-card/admin-create-card';
import { AdminReadyCard } from
  '../../../components/admin-page-components/admin-word-card/admin-ready-card/admin-ready-card';
import { EmptyWordCard } from
  '../../../components/admin-page-components/admin-word-card/empty-word-card/empty-word-card';
import { BaseComponent } from
  '../../../components/base-component';
import { createWord, deleteWord, getWordsByCategory, updateWord } from '../../../server';
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
      this.updateOldCard(e);
    });
    this.emptyCard.bigCross.element.addEventListener('click', () => this.showCreateCard())

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
        card.element.id = String(word.wordId);
        this.element.prepend(card.element);
      });
    })
  }
  deleteWordCard = (e: Event): void => {
    const smallCross = e.target as HTMLElement;
    if (smallCross.classList.contains('small-cross')) {
      const wordID = smallCross.parentElement?.id;
      if(!wordID) return
      smallCross.parentElement?.remove();
      deleteWord(wordID);
    }
  };

  createNewWord = (): void => {
    const wordInput = this.createCard.wordInput.element as HTMLInputElement;
    const translationInput = this.createCard.translationInput.element as HTMLInputElement;
    if (!wordInput.value || !translationInput) {
            return;
    }
    const wordId = (new Date()).getTime();
    createWord({
      wordValue: wordInput.value,
      translation: translationInput.value,
      categoryId: Number(window.location.hash.split('!')[1]),
      wordId,
    });
    const wordCard = new AdminReadyCard(wordInput.value, translationInput.value);
    wordCard.element.id = String(wordId);
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

  updateOldCard = (e: Event): void => {
    const changeButton = e.target as HTMLElement;
    if (!changeButton.classList.contains('admin__ready-card-button')) return;
    const wordCard = changeButton.parentElement;
    if (!wordCard) return;
    const { id } = wordCard;
    const wordValue = wordCard.querySelector('.word-text')?.textContent as string;
    const translation = wordCard.querySelector('.translation-text')?.textContent as string;
    const wordCreateCard = new AdminCreateCard();
    (wordCreateCard.wordInput.element as HTMLInputElement).value = wordValue;
    (wordCreateCard.translationInput.element as HTMLInputElement).value = translation;
    const createCardElement = wordCreateCard.element;
    createCardElement.classList.remove('hidden');
    wordCard.replaceWith(createCardElement);

    wordCreateCard.cancelButton.element.addEventListener('click',
      () => this.createNewCard(wordValue, translation, id, createCardElement));

      wordCreateCard.addButton.element
      .addEventListener('click', () => {
        const newWord = (wordCreateCard.wordInput.element as HTMLInputElement).value;
        const newTranslation = (wordCreateCard.translationInput.element as HTMLInputElement).value;
        if (!newWord || !newTranslation) return;
        this.createNewCard(newWord, newTranslation, id, createCardElement);
        updateWord({
          wordValue: newWord,
          translation: newTranslation,
          categoryId: Number(window.location.hash.split('!')[1]),
          wordId: Number(id),
        });
      });
  }

  createNewCard = (word: string, translation: string, wordId: string,
     createCardElement: HTMLElement, soundPath?: string, imagePath?: string): void => {
    const card = new AdminReadyCard(word, translation, soundPath, imagePath);
    card.element.id = wordId;
    createCardElement.replaceWith(card.element);
  };
}
