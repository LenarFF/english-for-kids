import { BaseComponent } from '../base-component';
import './burger.css';

export class Burger extends BaseComponent {
  burgerTop: BaseComponent;

  burgerMid: BaseComponent;

  burgerBot: BaseComponent;

  constructor() {
    super('div', ['burger']);

    this.burgerTop = new BaseComponent('span', ['burger__top']);
    this.burgerMid = new BaseComponent('span', ['burger__mid']);
    this.burgerBot = new BaseComponent('span', ['burger__bot']);

    this.element.append(this.burgerTop.element,
      this.burgerMid.element, this.burgerBot.element);

    this.element.addEventListener('click', () => this.redrawBurger());
  }

  redrawBurger(): void {
    this.burgerMid.element.classList.toggle('burger__mid_open');
    this.burgerBot.element.classList.toggle('burger__bot_open');
    this.burgerTop.element.classList.toggle('burger__top_open');
  }
}
