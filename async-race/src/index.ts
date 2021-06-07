import { App } from './App'
import { Garage } from './components/garage/garage';
import { Winners } from './components/winners/winners';
import './styles.css'



const garage = new Garage()
const winners = new Winners()

window.onload = () => {
  const appElement = document.getElementById('app');
  if (!appElement) throw Error('App root element not found');
  const  app = new App(appElement);
  app.main.element.appendChild(garage.element)

const locationResolver = (location: string) => {
  app.main.element.innerHTML = '';


switch (location) {
  case '#/garage':
    app.main.element.appendChild(garage.element)

  break;
  case '#/winners':
    app.main.element.appendChild(winners.element)

  break;
  default:
    app.main.element.appendChild(garage.element)

}

}


if (window.location) {

  const garageButton = document.querySelector('.garage-button');
  const winnersButton = document.querySelector('.winners-button');

  garageButton?.addEventListener('click', () => {
     window.location.hash = '#/garage';
  });
  winnersButton?.addEventListener('click', () => {
    if (window.location.hash !== '#/winners') window.location.hash = '#/winners';
  });

  window.addEventListener('hashchange', () => {
    locationResolver(window.location.hash);
  });
}
};

