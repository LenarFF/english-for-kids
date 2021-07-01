import { BaseComponent } from '../../components/base-component';
import './statistics-page.css';

export class StatisticsPage extends BaseComponent {
  constructor() {
    super('div', ['statistics']);
    this.element.innerHTML = ' stat';
  }
}
