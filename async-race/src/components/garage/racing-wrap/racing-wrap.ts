
import { BaseComponent } from "../../BaseComponent/BaseComponent";

export class  RacingWrap extends BaseComponent {


  constructor(styles: string[] = []) {
    super('div', ['racing-wrap'])

    this.element.classList.add(...styles);

  }


 }