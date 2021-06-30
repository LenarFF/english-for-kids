import { data } from './data';
import { CategoryPage } from './pages/category-page/category-page';
import { GameEnd } from './pages/game-end/game-end';
import { MainPage } from './pages/main-page/main-page';

export class Router {
  constructor() {
    window.onload = () => {
      const pageWrap = document.querySelector('.page-wrap');
      if (!pageWrap) throw Error('App root element not found');
      if (window.location) {
        window.addEventListener('hashchange', () => {
          this.locationResolver(window.location.hash, pageWrap);
        });
      }
    };
  }

  locationResolver = (location: string, pageWrap: Element): void => {
    pageWrap.innerHTML = '';
    const mainPage = new MainPage();
    const gameEnd = new GameEnd(data.numberOfMistakes === 0,
      data.numberOfMistakes);
    const categoryPage = new CategoryPage(Number(location.slice(-1)));
    switch (location) {
      case '#/main-page/':
        mainPage.renderCards();
        pageWrap.append(mainPage.element);
        break;
      case '#/end-game/':

        pageWrap.append(gameEnd.element);
        break;
      default:
        categoryPage.renderCards();
        pageWrap.append(categoryPage.element);
    }
  };
}
