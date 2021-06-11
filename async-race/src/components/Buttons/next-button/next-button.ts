import { data } from "../../../data";
import { Buttons } from "../buttons";

export class NextButton extends Buttons {
  constructor() {
    super('next');
  }

  buttonHandler() {
    super.buttonHandler();
    const activePage = document.querySelector('.active');
    const nextSibling = activePage?.nextElementSibling;
    if (nextSibling) {
      data.pageCounter += 1;
      activePage?.classList.remove('active');
      activePage?.classList.add('hidden');
      activePage?.nextElementSibling?.classList.remove('hidden');
      activePage?.nextElementSibling?.classList.add('active');
      this.changePageCount();
    }
  }

  changePageCount() {
    const page = document.getElementById('page');
    if(page) page.innerHTML = `${data.pageCounter}`
  }
}