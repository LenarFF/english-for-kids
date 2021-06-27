import { BaseComponent } from "../../../base-component";
import './word.css'

export class Word extends BaseComponent {
  constructor(wordValue: string) {
    super('p', ['word-card__word']);
    this.element.innerHTML = `${wordValue}`
  }
}