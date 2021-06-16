import { BaseComponent } from "../../BaseComponent/BaseComponent";
import { WinNextButton } from "../../Buttons/win-next-button/win-next-button";
import { WinPrevButton } from "../../Buttons/win-prev-button/win-prev-button";

export class WinPagination extends BaseComponent {

  winPrevButton: WinPrevButton
  winNextButton: WinNextButton
  constructor() {
    super('div', ['pagination-wrap']);

    this.winPrevButton = new WinPrevButton();
    this.winNextButton = new WinNextButton();

    this.element.appendChild(this.winPrevButton.element);
    this.element.appendChild(this.winNextButton.element);

  }
}