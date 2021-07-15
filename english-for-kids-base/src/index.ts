import { data } from './data';
import { LocalStorage } from './localStorageClass';
import { AppWrapper } from './pages/app-wrapper/app-wrapper';
import { Router } from './routing';
import './style.css';

export function startApp(): void {
  window.location.hash = '#/main-page/';
  data.authorized = false;
  const appWrapper = new AppWrapper();
  document.querySelector('.body')?.append(appWrapper.element);

  const router = new Router();
  router.addListener();
  const storage = new LocalStorage();
  storage.createStorage();
  storage.getItems();
}
startApp();
