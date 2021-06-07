import { BaseComponent } from "../BaseComponent/BaseComponent"

export class Winners extends BaseComponent {

  constructor() {
    super('div', ['winners-wrapper'])
    this.element.innerHTML = 'Winners'
  }
}