import './styles.css';
import { App } from './app';
import { AboutGame } from './components/about-game/about-game';
import { BestScore } from './components/Best-score/best-score';
import { GameSettings } from './components/game-settings/game-settings';


const aboutGame = new AboutGame();
const bestSore = new BestScore();
const gameSettings = new GameSettings();





window.addEventListener('load', () => {
  console.log(window.location.hash);
});

window.onload = () => {
  const appElement = document.getElementById('app');
  if (!appElement) throw Error('App root element not found');


  new App(appElement).start();

  const locationResolver = (location: string) => {
    console.log(window.location.hash);
    const wrap = document.querySelector('.wrapper');
    if (!wrap) throw Error('wrap root element not found');
    wrap.innerHTML = '';

    switch (location) {
      case '#/about-game/':
        wrap.append(aboutGame.element);
        break;
      case '#/best-score/':
        wrap.append(bestSore.element);
        break;
      case '#/game-settings':
        wrap.append(gameSettings.element);
        break;
      default:
        console.log('index default');
    }
  };



  if (location) {
    const navEl = document.querySelectorAll('.nav__list-link');
    if (!navEl) throw Error('navEl element not found');

    window.addEventListener('hashchange', () => {
      console.log(window.location.hash);
      locationResolver(window.location.hash);
    });
  }
};


