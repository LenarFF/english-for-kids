import { BaseComponent } from "../BaseComponent/BaseComponent";
import { CreateButton } from "../Buttons/create-button/create-button";
import { UpdateButton } from "../Buttons/update-button/update-button";
import { Input } from "../input/input";

export class Form extends BaseComponent {

  textInput: Input
  colorInput: Input
  createButton: CreateButton
  updateButton: UpdateButton

  constructor(assignment: string) {
    super('form', ['.form'])
    this.textInput = new Input('text', `${assignment}-text`)
    this.colorInput = new Input('color', `${assignment}-color`)

    this.createButton = new CreateButton()
    this.updateButton = new UpdateButton()

    this.element.appendChild(this.textInput.element)
    this.element.appendChild(this.colorInput.element)

    if(assignment === "create") {
      this.element.appendChild(this.createButton.element)
    } else {
      this.element.appendChild(this.updateButton.element)
    }
  }
}