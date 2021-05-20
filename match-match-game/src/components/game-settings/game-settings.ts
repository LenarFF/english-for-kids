import { BaseComponent } from '../base-component';
import './game-settings.css';


export class GameSettings extends BaseComponent {
  constructor() {
    super('div', ['game-settings']);
    this.element.innerHTML = `
    <h1>Game settings</h1>
    `
  }
}