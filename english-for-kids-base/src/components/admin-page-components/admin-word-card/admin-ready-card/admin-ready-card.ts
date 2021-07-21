import { BaseComponent } from '../../../base-component';
import { AdminWordCard } from '../admin-word-card';
import './admin-ready-card.css';

export class AdminReadyCard extends AdminWordCard {
  image: BaseComponent;

  cross: BaseComponent;

  changeButton: BaseComponent;

  constructor(word: string, translation: string, soundPath: string='asd', imagePath: string='aaa') {
    super();
    this.element.innerHTML = `
    <p class="admin__ready-card-text">Word:
      <span class="admin__ready-card-info word-text">${word}</span>
    </p>
    <p class="admin__ready-card-text">Translation:
      <span class="admin__ready-card-info translation-text">${translation}</span>
    </p>
    <p class="admin__ready-card-text">Sound File:
      <span class="admin__ready-card-info">${soundPath}</span>
    </p>
    <p class="admin__ready-card-text">Image:</p>
    `;
    this.image = new BaseComponent('div', ['admin__ready-card-image']);
    this.changeButton = new BaseComponent('button', ['admin__ready-card-button']);
    this.cross = new BaseComponent('div', ['small-cross']);

    this.changeButton.element.innerHTML = 'Change';
    this.image.element.style.backgroundImage = `url('./${imagePath}')`;
    this.element.append(this.image.element, this.changeButton.element, this.cross.element);
  }
}
