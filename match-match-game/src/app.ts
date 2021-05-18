import { Game } from './components/game/game';
import { Header } from './components/header/header';
import { ImageCategoryModel } from './models/image-category-model';

export class App {
  private readonly header: Header;
  private readonly game: Game;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.game = new Game();
    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.game.element);
  }

  async start() {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[0];
    const images = cat.images.map((name) => `${cat.category}/${name}`);

    this.game.newGame(images);
  }
}
