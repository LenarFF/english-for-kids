import { BaseComponent } from '../../../base-component';
import { Input } from '../../../form/input/input';
import { Label } from '../../../form/input/label/label';
import { AdminCardButton } from '../admin-card-button/admin-card-button';
import { AdminCategoryCard } from '../admin-category-card';
import './category-create-card.css';

export class CategoryCreateCard extends AdminCategoryCard {
  label: Label;

  input: Input;

  inputWrap: BaseComponent;

  buttonsWrap: BaseComponent;

  cancelButton: AdminCardButton;

  createButton: AdminCardButton;

  constructor() {
    super(['hidden']);

    this.label = new Label('category-name', 'Category Name:');
    this.input = new Input('text', 'Category Name:', 'category-name', 'admin__category-input');
    this.inputWrap = new BaseComponent('div', ['admin__category-input']);
    this.buttonsWrap = new BaseComponent('div', ['create-card__buttons']);
    this.cancelButton = new AdminCardButton('Cancel', [
      'create-card__button',
      'create-card__button_red',
    ]);
    this.createButton = new AdminCardButton('Create', ['create-card__button']);

    this.inputWrap.element.append(this.label.element, this.input.element);
    this.buttonsWrap.element.append(this.cancelButton.element, this.createButton.element);
    this.element.append(this.inputWrap.element, this.buttonsWrap.element);
  }
}
