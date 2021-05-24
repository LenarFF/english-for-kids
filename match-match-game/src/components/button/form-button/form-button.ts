
import { Button } from '../button';

export class FormButton extends Button {


  clearInput() {
    (document.getElementById('name') as HTMLInputElement).value ='';
    (document.getElementById('name') as HTMLInputElement).classList.remove('input_success', 'input_error');

    (document.getElementById('surname') as HTMLInputElement).value = '';
    (document.getElementById('surname') as HTMLInputElement).classList.remove('input_success', 'input_error');

    (document.getElementById('email') as HTMLInputElement).value = '';
    (document.getElementById('email') as HTMLInputElement).classList.remove('input_success', 'input_error');
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