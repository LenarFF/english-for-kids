import { Buttons } from "../buttons";

export class WinnersButton extends Buttons {

  constructor() {
    super('winners', ['winners-button'])

  }
  buttonHandler() {
    super.buttonHandler();
    document.querySelector('.garage-wrapper')?.classList.add('hidden')
    document.querySelector('.winners-wrapper')?.classList.remove('hidden')
  }
}