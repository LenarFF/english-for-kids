import { BaseComponent } from "../BaseComponent/BaseComponent"

export class Garage extends BaseComponent {

  constructor() {
    super('div', ['garage-wrapper'])
    this.element.innerHTML = 'Garage'
  }
}