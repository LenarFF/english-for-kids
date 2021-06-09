import { BaseComponent } from "../BaseComponent/BaseComponent"
import { Title } from "../title/title"

export class Winners extends BaseComponent {

  title: Title
  subtitle: Title

  constructor() {
    super('div', ['winners-wrapper', 'hidden'])

    this.title = new Title('Winners')
    this.subtitle = new Title('Page')

    this.element.appendChild(this.title.element)
    this.element.appendChild(this.subtitle.element)
  }
}