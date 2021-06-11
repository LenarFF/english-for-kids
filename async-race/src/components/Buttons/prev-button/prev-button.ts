import { data } from "../../../data";
import { Buttons } from "../buttons";
import { NextButton } from "../next-button/next-button";

export class PrevButton extends Buttons {

  nextButton: NextButton
  constructor() {
    super('prev');
    this.nextButton = new NextButton()

  }

  buttonHandler() {
    super.buttonHandler();
    const activePage = document.querySelector('.active');
    const prevSibling = activePage?.previousElementSibling;
    if (prevSibling) {
      data.pageCounter -= 1;
      activePage?.classList.remove('active');
      activePage?.classList.add('hidden');
      activePage?.previousElementSibling?.classList.remove('hidden');
      activePage?.previousElementSibling?.classList.add('active');
      this.nextButton.changePageCount();
    }
  }
}