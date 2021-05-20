import { BaseComponent } from '../base-component';
import './best-score.css';


export class BestScore extends BaseComponent {
  constructor() {
    super('div', ['about-game']);
    this.element.innerHTML = `
    <h1>Best players</h1>
    `
  }
}