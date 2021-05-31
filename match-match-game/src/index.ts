import './styles.css';
import { App } from './app';
import { AboutGame } from './components/about-game/about-game';
import { BestScore } from './components/Best-score/best-score';
import { GameSettings } from './components/game-settings/game-settings';
import { Header } from './components/header/header';
import { BaseComponent } from './components/base-component';
import { Cover } from './components/cover/cover';
import { RegisterForm } from './components/register-form/register-form';

const aboutGame = new AboutGame();
const bestSore = new BestScore();
const gameSettings = new GameSettings();

window.addEventListener('load', () => {
  window.location.hash = '#';
});

function hideStartButton() {
  const startButton = document.querySelector('.start-button');
  startButton?.classList.add('hidden');
}
function hideStopButton() {
  const stopButton = document.querySelector('.stop-button');
  stopButton?.classList.add('hidden');
}
function addStopButton() {
  const stopButton = document.querySelector('.stop-button');
  stopButton?.classList.remove('hidden');
}
function addStartButton() {
  const startButton = document.querySelector('.start-button');
  startButton?.classList.remove('hidden');
}

window.onload = () => {
  const appElement = document.getElementById('app');
  if (!appElement) throw Error('App root element not found');

  const header = new Header();
  const wrap = new BaseComponent('main', ['wrapper']);
  const cover = new Cover();
  const form = new RegisterForm();
  appElement.appendChild(header.element);
  appElement.appendChild(wrap.element);
  appElement.appendChild(cover.element);
  appElement.appendChild(form.element);
  wrap.element.append(aboutGame.element);

  const locationResolver = (location: string) => {
    wrap.element.innerHTML = '';

    switch (location) {
      case '#/about-game/':
        wrap.element.append(aboutGame.element);
        hideStopButton();
        addStartButton();
        break;
      case '#/best-score/':
        wrap.element.append(bestSore.element);
        hideStopButton();
        addStartButton();
        break;
      case '#/game-settings':
        wrap.element.append(gameSettings.element);
        hideStopButton();
        window.onload = () => addStartButton();
        break;
      case '#/game/':
        new App(wrap.element).start();
        addStopButton();
        hideStartButton();
        break;
      default:
        // new App(wrap.element).start()
        wrap.element.append(aboutGame.element);
    }
  };

  if (window.location) {
    const navEl = document.querySelectorAll('.nav__list-link');
    const startButton = document.querySelector('.start-button');
    const stopButton = document.querySelector('.stop-button');
    startButton?.addEventListener('click', () => {
      if (window.location.hash !== '#/game/') window.location.hash = '#/game/';
    });
    stopButton?.addEventListener('click', () => {
      if (window.location.hash !== '#/best-score/') window.location.hash = '#/best-score/';
    });

    if (!navEl) throw Error('navEl element not found');

    window.addEventListener('hashchange', () => {
      locationResolver(window.location.hash);
    });
  }
};
