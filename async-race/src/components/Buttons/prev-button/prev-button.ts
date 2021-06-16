import { data } from '../../../data';
import { Buttons } from '../Buttons';
import { NextButton } from '../next-button/next-button';

export class PrevButton extends Buttons {
  nextButton: NextButton;

  constructor() {
    super('prev');
    this.nextButton = new NextButton();
  }

  buttonHandler() {
    super.buttonHandler();
    const activePage = document.querySelector('.racing-wrap_active');
    const prevSibling = activePage?.previousElementSibling;
    if (prevSibling) {
      data.pageCounter -= 1;
      activePage?.classList.remove('racing-wrap_active');
      activePage?.classList.add('hidden');
      activePage?.previousElementSibling?.classList.remove('hidden');
      activePage?.previousElementSibling?.classList.add('racing-wrap_active');
      this.nextButton.changePageCount();
    }
  }
}
