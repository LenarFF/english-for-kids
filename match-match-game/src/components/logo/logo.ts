import { BaseComponent } from '../base-component';
import './logo.css';

export class Logo extends BaseComponent {
  constructor() {
    super('div', ['logo-wrap']);
    this.element.innerHTML =`
    <a class="logo-link" href=#>
    <div class="logo__top">Match</div>
    <div class="logo__bottom">Match</div>
    </a>
    `
  }
}