import { data } from "../../data"
import { BaseComponent } from "../BaseComponent/BaseComponent"
import { Title } from "../title/title"
import { Table } from "./table/table"
import { WinPagination } from "./win-pagination/win-pagination"

export class Winners extends BaseComponent {

  title: Title
  subtitle: Title
  table: Table
  pagination: WinPagination

  constructor() {
    super('div', ['winners-wrapper', 'hidden']);

    this.title = new Title('Winners', 'winners', 6);
    this.subtitle = new Title('Page', 'page', 1);
    this.table = new Table();
    this.pagination = new WinPagination()

    this.element.appendChild(this.title.element);
    this.element.appendChild(this.subtitle.element);
    this.element.appendChild(this.table.element);
    this.element.appendChild(this.pagination.element);
  }
}