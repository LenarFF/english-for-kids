import { BaseComponent } from "../BaseComponent/BaseComponent"

export class Winners extends BaseComponent {

  constructor() {
    super('div', ['winners-wrapper', 'hidden'])
    this.element.innerHTML = 'Winners'
  }
}