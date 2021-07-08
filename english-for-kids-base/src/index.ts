import { LocalStorage } from './localStorageClass';
import { AppWrapper } from './pages/app-wrapper/app-wrapper';
import { Router } from './routing';
import './style.css';

window.location.hash = '#/main-page/';
const appWrapper = new AppWrapper();
document.querySelector('.body')?.append(appWrapper.element);

const router = new Router();
router.addListener();
const storage = new LocalStorage();
storage.createStorage();
storage.getItems();
