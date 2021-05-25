import './styles.css';
import { App } from './app';
import { AboutGame } from './components/about-game/about-game';
import { BestScore } from './components/Best-score/best-score';
import { GameSettings } from './components/game-settings/game-settings';
import { Timer } from './components/timer/timer';
import { CardsField } from './components/game-field/cards-field';
import { Game } from './components/game/game';
import { PreApp } from './preApp';

const aboutGame = new AboutGame();
const bestSore = new BestScore();
const gameSettings = new GameSettings();
const timer = new Timer();
const game = new Game();

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
      case '#':
        // wrap.append(game.element);
        console.log('hello #');
        // new App(appElement).start();
        break;
      default:
        wrap.append(game.timer.element);
        wrap.append(game.cardsField.element);
        console.log('hello #');
        new PreApp(appElement).start();
    }
  };

  if (window.location) {
    const navEl = document.querySelectorAll('.nav__list-link');
    document.querySelector('.start-button')?.addEventListener('click', () => {
      if (window.location.hash !== '#') window.location.hash = '#';
    });

    if (!navEl) throw Error('navEl element not found');

    window.addEventListener('hashchange', () => {
      console.log(window.location.hash);
      locationResolver(window.location.hash);
    });
  }
};
