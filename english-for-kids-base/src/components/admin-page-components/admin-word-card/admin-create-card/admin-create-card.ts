import { BaseComponent } from '../../../base-component';
import { Input } from '../../../form/input/input';
import { Label } from '../../../form/input/label/label';
import { AdminWordCard } from '../admin-word-card';
import './admin-create-card.css';
import { AdminWordCancelButton } from './admin-word-cancel-button/admin-word-cancel-button';
import { SelectWrap } from './select-wrap/select-wrap';

export class AdminCreateCard extends AdminWordCard {
  wordInputWrap: BaseComponent;

  translationInputWrap: BaseComponent;

  wordLabel: Label;

  translationLabel: Label;

  wordInput: Input;

  translationInput: Input;

  inputsWrap: BaseComponent;

  soundSelectWrap: SelectWrap;

  imageSelectWrap: SelectWrap;

  selectsWrap: BaseComponent;

  cancelButton: AdminWordCancelButton;

  constructor() {
    super();

    this.wordInputWrap = new BaseComponent('div', ['admin-word-card__input-wrap']);
    this.translationInputWrap = new BaseComponent('div', ['admin-word-card__input-wrap']);
    this.inputsWrap = new BaseComponent('div', ['admin-word-card__inputs-wrap']);
    this.soundSelectWrap = new SelectWrap('sound');
    this.imageSelectWrap = new SelectWrap('image');
    this.selectsWrap = new BaseComponent('div', ['admin-word-card__selects-wrap']);
    this.wordLabel = new Label('word', 'Word');
    this.translationLabel = new Label('translation', 'Translation');
    this.wordInput = new Input('text', 'Word', 'word', 'admin__word-card-input');
    this.translationInput = new Input(
      'text',
      'Translation',
      'translation',
      'admin__word-card-input',
    );
    this.cancelButton = new AdminWordCancelButton();

    this.wordInputWrap.element.append(this.wordLabel.element, this.wordInput.element);
    this.translationInputWrap.element.append(
      this.translationLabel.element,
      this.translationInput.element,
    );

    this.selectsWrap.element.append(this.soundSelectWrap.element, this.imageSelectWrap.element);
    this.inputsWrap.element.append(this.wordInputWrap.element, this.translationInputWrap.element);
    this.element.append(
      this.inputsWrap.element,
      this.selectsWrap.element,
      this.cancelButton.element,
    );
  }
}
