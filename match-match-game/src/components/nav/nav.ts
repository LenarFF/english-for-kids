import { BaseComponent } from '../base-component';
import './nav.css';

export class Nav extends BaseComponent {
  constructor() {
    super('nav', ['nav']);

    this.element.innerHTML = `
    <ul class="nav__list">
    <li class="nav__list-element">
      <a href="#" class="nav__list-link">About Game</a>
    </li>
    <li class="nav__list-element">
      <a href="#" class="nav__list-link">Best Score</a>
    </li>
    <li class="nav__list-element">
      <a href="#" class="nav__list-link">Game Settings</p>
      </a>
    </li>
  </ul>
    `

  }
}