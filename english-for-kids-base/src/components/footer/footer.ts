import { BaseComponent } from '../base-component';
import './footer.css';

export class Footer extends BaseComponent {
  constructor() {
    super('footer', ['footer']);
    this.element.innerHTML = `
      <a class="github-link" target="_blank" href="https://github.com/LenarFF">My Github</a>
      <p class="year">2021</p>
      <a class="school" href="https://rs.school/js/">
        <img class="school__logo" target="_blank" src="./img/rs_school_js.svg">
      </a>
    `;
  }
}
