import { data } from "../../../data";
import { deleteCar } from "../../../server";
import { Buttons } from "../buttons";
import { CreateButton } from "../create-button/create-button";

export class RemoveButton extends Buttons {

  createButton: CreateButton
  constructor() {
    super('remove', ['selection-button']);
    this.createButton = new CreateButton();
  }

  buttonHandler() {
    super.buttonHandler();
    const id = this.element.parentElement?.parentElement?.getAttribute('id');

    this.element.parentElement?.parentElement?.remove();
    data.carCounter -= 1;
    this.createButton.titleCountChange();
    if(id)deleteCar(+id)
  }
}