import { BaseComponent } from "../BaseComponent/BaseComponent";
import { NextButton } from "../Buttons/next-button/next-button";
import { PrevButton } from "../Buttons/prev-button/prev-button";
import './pagination.css'

export class Pagination extends BaseComponent {

  prevButton: PrevButton
  nextButton: NextButton
  constructor() {
    super('div', ['pagination-wrap']);

    this.prevButton = new PrevButton();
    this.nextButton = new NextButton();

    this.element.appendChild(this.prevButton.element);
    this.element.appendChild(this.nextButton.element);

  }
}