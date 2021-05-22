import { BaseComponent } from '../base-component';
import './about-game.css';

export class AboutGame extends BaseComponent {
  constructor() {
    super('div', ['about-game']);
    this.element.innerHTML = `
    <div class="block-wrapper">
    <div class="top-blocks">
      <div class="block">
        <p class="block__text">
          1) Register new player in game
        </p>
      </div>
      <div class="block register-img">
      </div>
    </div>
    <div class="middle-blocks">
      <div class="block">
        <p class="block-text">2) Configure your game settings</p>
      </div>
      <div class="block settings-img">
      </div>
    </div>
    <div class="bottom-blocks">
      <div class="block">
        <p class="block-text">
          3) Start you new game! Remember card positions and match it before times up.
        </p>
      </div>
      <div class="block game-img">
      </div>
    </div>
  </div>
    `;
  }
}
