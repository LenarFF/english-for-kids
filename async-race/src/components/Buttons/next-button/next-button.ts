import { data } from '../../../data';
import { Buttons } from '../button';

export class NextButton extends Buttons {
  constructor() {
    super('next');
  }

  buttonHandler() {
    super.buttonHandler();
    const activePage = document.querySelector('.racing-wrap_active');
    const nextSibling = activePage?.nextElementSibling;
    if (nextSibling) {
      data.pageCounter += 1;
      activePage?.classList.remove('racing-wrap_active');
      activePage?.classList.add('hidden');
      activePage?.nextElementSibling?.classList.remove('hidden');
      activePage?.nextElementSibling?.classList.add('racing-wrap_active');
      this.changePageCount();
    }
  }

  changePageCount = () => {
    const page = document.getElementById('page');
    if (page) page.innerHTML = `${data.pageCounter}`;
  };
}
