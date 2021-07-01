import { LocalStorage } from './localStorageClass';
import { AppWrapper } from './pages/app-wrapper/app-wrapper';
import { Router } from './routing';
import './style.css';

const appWrapper = new AppWrapper();
document.querySelector('.body')?.append(appWrapper.element);

const router = new Router();
router.addListener();
const storage = new LocalStorage();
