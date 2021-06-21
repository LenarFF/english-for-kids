import { BaseComponent } from '../BaseComponent/BaseComponent';
import { NextButton } from '../Buttons/next-button/next-button';
import { PrevButton } from '../Buttons/prev-button/prev-button';
import './pagination.css';

export class Pagination extends BaseComponent {
  winPrevButton: PrevButton;

  winNextButton: NextButton;

  constructor() {
    super('div', ['pagination-wrap']);

    this.winPrevButton = new PrevButton();
    this.winNextButton = new NextButton();

    this.element.appendChild(this.winPrevButton.element);
    this.element.appendChild(this.winNextButton.element);
  }
}
