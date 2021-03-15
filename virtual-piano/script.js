"use strict";

const pianoSounds = {
  a: "assets/audio/a.mp3",
  "a♯": "assets/audio/a♯.mp3",
  b: "assets/audio/b.mp3",
  c: "assets/audio/c.mp3",
  "c♯": "assets/audio/c♯.mp3",
  d: "assets/audio/d.mp3",
  "d♯": "assets/audio/d♯.mp3",
  e: "assets/audio/e.mp3",
  "f♯": "assets/audio/f♯.mp3",
  f: "assets/audio/f.mp3",
  g: "assets/audio/g.mp3",
  "g♯": "assets/audio/g♯.mp3",
};

const keyboardSounds = {
  R: "assets/audio/c♯.mp3",
  T: "assets/audio/d♯.mp3",
  U: "assets/audio/f♯.mp3",
  I: "assets/audio/g♯.mp3",
  O: "assets/audio/a♯.mp3",
  D: "assets/audio/c.mp3",
  F: "assets/audio/d.mp3",
  G: "assets/audio/e.mp3",
  H: "assets/audio/f.mp3",
  J: "assets/audio/g.mp3",
  K: "assets/audio/a.mp3",
  L: "assets/audio/b.mp3",
};

document.addEventListener("keydown", (event) => keyboardHandler(event));

/**
 * музычка с клавы
 */
function keyboardHandler(event) {
  if (event.repeat) return;
  let letter = "";
  if (event.code.length === 4) {
    letter = event.code[3].toUpperCase();
  }
  let audio = new Audio();
  if (!(letter in keyboardSounds)) return;
  audio.src = keyboardSounds[letter];
  audio.currentTime = 0;
  audio.play();
  let dataAttribute = document.querySelectorAll(".piano-key");
  for (let i = 0; i < dataAttribute.length; i++) {
    if (dataAttribute[i].getAttribute("data-letter") === letter) {
      document
        .querySelectorAll(".piano-key")
        [i].classList.add("piano-key-active");
    }
  }
}

document.addEventListener("keyup", (event) => keyboardUpHandler(event));

/**
 * убирает класс после отпускания кнопки
 * @param {*} event
 */
function keyboardUpHandler(event) {
  let letter = "";
  letter = event.code[3].toUpperCase();
  let dataAttribute = document.querySelectorAll(".piano-key");
  for (let i = 0; i < dataAttribute.length; i++) {
    if (dataAttribute[i].getAttribute("data-letter") === letter) {
      document
        .querySelectorAll(".piano-key")
        [i].classList.remove("piano-key-active");
    }
  }
}

document
  .querySelector(".piano")
  .addEventListener("mousedown", (event) => clickHandler(event));
let mouseDown = false;
/**
 * играет при нажатии мышкой и добавляет класс Активной кнопке
 * @param {*} event
 * @returns
 */
function clickHandler(event) {
  mouseDown = true;
  giveAudio(event);
  event.target.classList.add("piano-key-active");
}

document
  .querySelector(".piano")
  .addEventListener("pointerover", (event) => addClassWhenMouseRun(event));

/**
 * добавляет классы при движении мыши и музычку
 */
function addClassWhenMouseRun(event) {
  if (mouseDown) {
    giveAudio(event);
    event.target.classList.add("piano-key-active");
    document
    .querySelector(".piano")
    .addEventListener("click", () => console.log('click'))
    
    }
  }

  

/**
 * Даёт музычку
 * @param {*} event
 */
function giveAudio(event) {
  let audio = new Audio();
  if (!(event.target.dataset.note in pianoSounds)) return;
  audio.src = pianoSounds[event.target.dataset.note];
  audio.currentTime = 0;
  audio.play();
}

document
  .querySelector(".piano")
  .addEventListener("click", (event) => removeClassWhenMouseNotActive(event));

document
  .querySelector(".piano")
  .addEventListener("mouseout", (event) => removeClassWhenMouseOut(event));

document.addEventListener("click", () => getMouseCondition());
/**
 * Меняет mouseDown на false при отпускании мыши
 */
function getMouseCondition() {
  mouseDown = false;
}

/**
 * убирает класс активной кнопки
 * @param {*} event
 */
function removeClassWhenMouseNotActive(event) {
  event.target.classList.remove("piano-key-active");
}
function removeClassWhenMouseOut(event) {
  event.target.classList.remove("piano-key-active");
}

document
  .querySelector(".btn-letters")
  .addEventListener("click", (event) => changeToLetters(event));

/**
 * Меняем на буквы
 * @param {*} event
 */
function changeToLetters(event) {
  let pianoKeys = document.querySelectorAll(".piano-key");
  event.target.classList.add("btn-active");
  event.target.previousElementSibling.classList.remove("btn-active");
  for (let key of pianoKeys) {
    key.classList.add("piano-key-letter");
  }
}
document
  .querySelector(".btn-notes")
  .addEventListener("click", (event) => changeToNotes(event));

/**
 * меняем на ноты
 * @param {*} event
 */
function changeToNotes(event) {
  let pianoKeys = document.querySelectorAll(".piano-key");
  event.target.classList.add("btn-active");
  event.target.nextElementSibling.classList.remove("btn-active");
  for (let key of pianoKeys) {
    key.classList.remove("piano-key-letter");
  }
}

document
  .querySelector(".fullscreen")
  .addEventListener("click", () => makeFullScreen());

/**
 * Делает фуллскрин
 */
function makeFullScreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
}
