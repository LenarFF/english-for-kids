"use strict";
const inputs = document.querySelectorAll(".filters input");
const outputs = document.querySelectorAll(".filters output");
const reset = document.querySelector(".btn-reset");
const nextPicture = document.querySelector(".btn-next");
const img = document.querySelector("img");
const load = document.querySelector(".btn-load--input")

resetStyles();

function handleUpdate() { 
  const suffix = this.dataset.sizing || "";  
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);  
  outputs.forEach(output => 
    {if (output.name === this.name) { 
      output.innerText = `${this.value}`
      drawImage()
    }       
}
  )
  
}
inputs.forEach(input => input.addEventListener("input", handleUpdate));

function resetStyles() {  
  outputs.forEach(output => 
    output.innerText = (output.name === "saturate")  ? "100" : "0")
  inputs.forEach(function(input) {
    input.value = (input.name === "saturate") ? 100 : 0;
    const handleUpdateBind = handleUpdate.bind(input);
    handleUpdateBind();
  });
  drawImage()
}

reset.addEventListener("click", resetStyles);



let now = new Date();
let nowHour = now.getHours();
let timesOfDay = "";
switch(true) {
  case(nowHour >= 0 && nowHour < 6):
    timesOfDay = "night";
    break;
  case(nowHour >= 6 && nowHour < 12):
    timesOfDay = "morning";
    break;
  case(nowHour >= 12 && nowHour < 18):
    timesOfDay = "day";
    break;
  case(nowHour >= 18 && nowHour < 24):
    timesOfDay = "evening";
    break;
}

const obj = {
  imagePath: "assets/img/img.jpg",
}

let numberPicture = 0;
function changePicture() {
  numberPicture  = (numberPicture === 20) ? 1 : numberPicture + 1;
  obj["imagePath"] = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timesOfDay}/${(numberPicture > 9) ? numberPicture : "0" + numberPicture}.jpg`;
  img.src = obj["imagePath"];
  drawImage()
}

nextPicture.addEventListener("click", changePicture);

const loadPicture = event => {  
  let files = Array.from(event.target.files);
  files.forEach(file => {
    const reader = new FileReader();

    reader.onload = ev => {
      img.src = ev.target.result;
      obj["imagePath"] = ev.target.result;
      drawImage()
    }
    reader.readAsDataURL(file)
  })
  load.value = null;
  
  };


load.addEventListener("change", loadPicture);


document
  .querySelector(".fullscreen")
  .addEventListener("click", () => makeFullScreen());

function makeFullScreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
}

const canvas = document.querySelector('canvas');
let filter = "";
function drawImage() {
  let image = new Image();
  image.src = img.src;
  image.setAttribute('crossOrigin', 'anonymous');
  image.onload = function() {
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    
    let blurCoef = (img.naturalHeight) / (img.height);
    const ctx = canvas.getContext("2d");
    let blur = parseInt(document.documentElement.style.getPropertyValue("--blur")) * blurCoef + "px";
    let invert = document.documentElement.style.getPropertyValue("--invert");
    let sepia = document.documentElement.style.getPropertyValue("--sepia");
    let saturate = document.documentElement.style.getPropertyValue("--saturate");
    let hue = document.documentElement.style.getPropertyValue("--hue");
    ctx.filter = `blur(${blur}) invert(${invert}) sepia(${sepia}) saturate(${saturate}) hue-rotate(${hue})`;
    filter = ctx.filter;
    ctx.drawImage(image, 0, 0);
  };  
}
drawImage();


const dataURL = canvas.toDataURL("image/jpeg");


const ctx = canvas.getContext('2d');
const download = document.querySelector('.btn-save');


download.addEventListener('click', function(e) {
  drawImage();
  let link = document.createElement('a');
  link.download = 'download.png';
  link.href = canvas.toDataURL();
  link.click();
  link.delete;
});
