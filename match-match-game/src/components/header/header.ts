import './header.css';
import { BaseComponent } from '../base-component';
import { Logo } from '../logo/logo';
import { Nav } from '../nav/nav';
import { Button } from '../button/button';
import { StopButton } from '../button/stop-button/stop-button';
import { RegisterButton } from '../button/register-button/register-button';
import { StartButton } from '../button/start-button/start-button';

export class Header extends BaseComponent {
  private readonly logo: Logo;
  private readonly nav: Nav;
  private readonly registerButton: RegisterButton;
  private readonly startButton: StartButton;

  constructor() {
    super('header', ['header']);

    this.logo = new Logo();
    this.nav = new Nav();
    this.registerButton = new RegisterButton();
    this.startButton = new StartButton();

    this.element.appendChild(this.logo.element);
    this.element.appendChild(this.nav.element);
    this.element.appendChild(this.registerButton.element);
    this.element.appendChild(this.startButton.element);
  }
}
