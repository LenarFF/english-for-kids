import { App } from './App'
import { Garage } from './components/garage/garage';
import { Winners } from './components/winners/winners';
import { deleteCar } from './server';
import './styles.css'



const garage = new Garage()
const winners = new Winners()

window.onload = () => {
  const appElement = document.getElementById('app');
  if (!appElement) throw Error('App root element not found');
  const  app = new App(appElement);
  app.main.element.appendChild(garage.element);
  app.main.element.appendChild(winners.element);

}