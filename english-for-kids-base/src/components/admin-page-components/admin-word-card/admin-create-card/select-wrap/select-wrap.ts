import { BaseComponent } from '../../../../base-component';
import './select-wrap.css';

export class SelectWrap extends BaseComponent {
  label: HTMLLabelElement;

  input: HTMLInputElement;

  subtitle: BaseComponent;

  constructor(assignment: string) {
    super('div', ['admin-word-card__select-wrap']);
    this.subtitle = new BaseComponent('p', ['admin-word-card__subtitle']);
    this.label = document.createElement('label');
    this.label.classList.add('admin-word__select-label');

    this.subtitle.element.innerHTML = `${assignment}:`;
    this.input = document.createElement('input');
    this.input.classList.add('admin-word__select-input');

    this.label.htmlFor = assignment;
    this.label.innerHTML = 'Select file';
    this.input.type = 'file';
    this.input.name = assignment;
    this.input.id = assignment;

    this.label.append(this.input);

    this.element.append(this.subtitle.element, this.label);
  }
}
