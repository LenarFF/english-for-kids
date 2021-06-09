import { BaseComponent } from "../BaseComponent/BaseComponent";

export class Title extends BaseComponent{
  constructor(name: string) {
    super('h2', ['title'])
    this.element.innerHTML = `${name}`
  }
}