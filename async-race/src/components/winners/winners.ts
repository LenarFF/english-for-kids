import { data } from "../../data"
import { BaseComponent } from "../BaseComponent/BaseComponent"
import { Title } from "../title/title"

export class Winners extends BaseComponent {

  title: Title
  subtitle: Title

  constructor() {
    super('div', ['winners-wrapper', 'hidden'])

    this.title = new Title('Winners', 'winners', 6)
    this.subtitle = new Title('Page', 'page', 1)

    this.element.appendChild(this.title.element)
    this.element.appendChild(this.subtitle.element)
  }
}