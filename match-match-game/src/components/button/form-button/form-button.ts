
import { Button } from '../button';

export class FormButton extends Button {


  clearInput() {
    (document.getElementById('name') as HTMLInputElement).value ='';
    (document.getElementById('surname') as HTMLInputElement).value = '';
    (document.getElementById('email') as HTMLInputElement).value = '';
  }

  hiddenForm() {
    const cover = document.querySelector(".cover") as HTMLElement;
    const form = document.querySelector(".register-form") as HTMLElement;

    cover.classList.add('hidden');
    form.classList.add('hidden');
  }

  buttonHandler() {
    super.buttonHandler();

    
  }

}