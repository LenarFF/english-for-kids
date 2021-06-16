import { BaseComponent } from './components/BaseComponent/BaseComponent';
import { Header } from './components/Header/Header';

export class App {
  rootElement: HTMLElement;

  header: Header;

  main: BaseComponent;

  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;
    this.header = new Header();
    this.main = new BaseComponent('main', ['main']);

    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.main.element);
  }
}
