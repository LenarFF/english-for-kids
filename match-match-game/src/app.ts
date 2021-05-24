import { BaseComponent } from './components/base-component';
import { Game } from './components/game/game';
import { Header } from './components/header/header';
import { RegisterForm } from './components/register-form/register-form';
import { ImageCategoryModel } from './models/image-category-model';
import { Cover } from './components/cover/cover';

export class App {

  private readonly header: Header;
  private readonly registerForm: RegisterForm;
  private readonly game: Game;
  cover: BaseComponent;

  constructor(private readonly rootElement: HTMLElement) {

    this.header = new Header();
    this.registerForm = new RegisterForm();
    this.game = new Game();
    this.cover = new Cover();

    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.game.element);
    this.rootElement.appendChild(this.registerForm.element);
    this.rootElement.appendChild(this.cover.element);
  }

  async start() {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[0];
    const images = cat.images.map((name) => `${cat.category}/${name}`);

    this.game.newGame(images);
  }
}
