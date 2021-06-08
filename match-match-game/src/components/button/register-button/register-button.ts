import { Button } from '../button';
import './register-button.css';

export class RegisterButton extends Button {
  constructor() {
    super('register new player', ['register-button']);
  }

  buttonHandler(): void {
    super.buttonHandler();

    const cover = document.querySelector('.cover') as HTMLElement;
    const form = document.querySelector('.register-form') as HTMLElement;

    cover.classList.remove('hidden');
    form.classList.remove('hidden');
  }
}
