import { BaseComponent } from '../BaseComponent/BaseComponent';

export class Title extends BaseComponent {
  constructor(name: string, id: string, count: number) {
    super('h2', ['title']);
    this.element.innerHTML = `${name} <span id='${id}'>${count}</span>`;
  }
}
