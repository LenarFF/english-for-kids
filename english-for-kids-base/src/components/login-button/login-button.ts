import { BaseComponent } from '../base-component';
import './login-button.css';

export class LoginButton extends BaseComponent {
  constructor() {
    super('button', ['login-button']);
    this.element.innerHTML = 'Login';
    this.element.addEventListener('click', () => this.showRegisterForm());
  }

  showRegisterForm = (): void => {
    const cover = document.querySelector('.cover') as HTMLElement;
    cover.classList.remove('hidden');
  };
}
