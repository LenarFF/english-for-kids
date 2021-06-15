import { data } from "../../data"
import { BaseComponent } from "../BaseComponent/BaseComponent"
import { Title } from "../title/title"
import { Table } from "./table/table"

export class Winners extends BaseComponent {

  title: Title
  subtitle: Title
  table: Table

  constructor() {
    super('div', ['winners-wrapper', 'hidden']);

    this.title = new Title('Winners', 'winners', 6);
    this.subtitle = new Title('Page', 'page', 1);
    this.table = new Table();

    this.element.appendChild(this.title.element);
    this.element.appendChild(this.subtitle.element);
    this.element.appendChild(this.table.element);
  }
}