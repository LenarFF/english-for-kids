import { data } from "../../data"
import { BaseComponent } from "../BaseComponent/BaseComponent"
import { NextButton } from "../Buttons/next-button/next-button"
import { PrevButton } from "../Buttons/prev-button/prev-button"
import { Form } from "../form/form"
import { Title } from "../title/title"
import { ControlButtons } from "./control-buttons/control-buttons"
import { RacingWrap } from "./racing-wrap/racing-wrap"
import './garage.css'
import { getCars } from "../../server"
import { GarageContainer } from "./create-cars/garage-container/garage-container"
import { WinnerWindow } from "./winner-window/winner-window"

export class Garage extends BaseComponent {

  createForm: Form
  updateForm: Form
  controlButtons: ControlButtons
  title: Title
  subtitle: Title
  garageContainer: GarageContainer
  paginationWrap: BaseComponent
  prevButton: PrevButton
  nextButton: NextButton
  carsQuantity: number
  winnerWindow: WinnerWindow

  constructor() {
    super('div', ['garage-wrapper']);

    this.createForm = new Form('create');
    this.updateForm = new Form('update');
    this.carsQuantity = data.carCounter;
    this.winnerWindow = new WinnerWindow();

    this.controlButtons = new ControlButtons();

    this.subtitle = new Title('Page', 'page', 1);

    this.garageContainer = new GarageContainer();

    this.paginationWrap = new BaseComponent('div', ['pagination-wrap']);

    this.prevButton = new PrevButton();
    this.nextButton = new NextButton();

    this.title = new Title('Garage', 'garage', this.garageContainer.carsQuantity);

    this.element.appendChild(this.createForm.element);
    this.element.appendChild(this.updateForm.element);
    this.element.appendChild(this.controlButtons.element);

    this.element.appendChild(this.title.element);
    this.element.appendChild(this.subtitle.element);
    this.element.appendChild(this.garageContainer.element);
    this.element.appendChild(this.paginationWrap.element);
    this.element.appendChild(this.winnerWindow.element)

    this.paginationWrap.element.appendChild(this.prevButton.element);
    this.paginationWrap.element.appendChild(this.nextButton.element);
    this.titleNumberRender()
  }

  async titleNumberRender():Promise<void> {
    await this.getCarsQuantity();
      const main = async () => {
        const span = this.title.element.lastElementChild
        if (span) span.innerHTML = `${this.carsQuantity}`
      }
      main();
  }

  async getCarsQuantity(): Promise<any> {
    const result = await getCars();
    if(result.count) this.carsQuantity = +result.count;
    data.carCounter = this.carsQuantity
}

}