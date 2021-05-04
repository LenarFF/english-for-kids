// famous pets
const slider = document.querySelector('.famous-pets__slider');
const right = document.querySelector('.famous-pets__right');
const left = document.querySelector(".famous-pets__left");
const content = document.querySelector(".famous-pets__images-wrap")
const space = 40;
let counter = 0;

let wrapWidth = slider.offsetWidth;
let slideWidth = document.querySelector('.famous-pets__image-wrap').offsetWidth;
window.addEventListener('resize', (e) => {
  wrapWidth = slider.offsetWidth;
  slideWidth = document.querySelector('.famous-pets__image-wrap').offsetWidth;
});

content.after(content.cloneNode(true));

right.addEventListener('click', e => {
  counter++;
  if (counter > 5) {
    counter = 0;
    slider.scrollTo( {      
      left: (slideWidth + space) * counter,
      behavior: "instant"
    })
    moveIt(counter);
    counter++;
  }
  moveIt(counter);

});

left.addEventListener('click', e => {
  counter--;  
  if (counter < 0) {
    counter = 5;
    slider.scrollTo( {
      left: (slideWidth + space) * counter,
      behavior: "instant"
    })
    setTimeout(moveIt(counter - 1), 1);
    counter--;
  } else {
    moveIt(counter)
  }
});



function moveIt(counter) {
  slider.scrollTo({
    left: (slideWidth + space) * counter,
    behavior: "smooth"
  })
}

// Форма
const feedbackButton = document.querySelector(".testimonials__feedback-button");
const cover = document.querySelector(".cover");
const form = document.querySelector(".feedback-wrapper");
const userName = document.getElementById('name');
const email = document.getElementById('email');
const review = document.getElementById('text-feedback');
const sendButton = document.getElementById('send');


function validateForm() {
  if (
    userName.validity.valid &&
    email.validity.valid &&
    review.value.length <= 280 &&
    review.value.length > 0
  ) {
    sendButton.classList.remove('invalid');
  } else {
    sendButton.classList.add('invalid');
  }
}


feedbackButton.addEventListener('click', () => {  
  cover.classList.remove('hidden');
  form.classList.remove('hidden');
  document.body.classList.add('notScrollable');
});

cover.addEventListener('click', () => {
  cover.classList.add('hidden');
  form.classList.add('hidden');  
  document.body.classList.remove('notScrollable');
});

sendButton.addEventListener('click', (e) => {  
  e.preventDefault();
  if (sendButton.classList.contains('invalid')) return;
  cover.classList.add('hidden');
  form.classList.add('hidden');  
  document.body.classList.remove('notScrollable');
});

userName.addEventListener('input', () => {
  validateForm();
});

email.addEventListener('input', () => {
  validateForm();
});

review.addEventListener('input', () => {
  validateForm();   
});



//Zoogeography

const eagleCard = document.getElementById("eagle-card");
const pandaCard = document.getElementById("panda-card");
const gorillaCard = document.getElementById("gorilla-card");
const alligatorCard = document.getElementById("alligator-card");
const eagleMarker = document.querySelector(".zoogeography__eagle-marker");
const pandaMarker = document.querySelector(".zoogeography__panda-marker");
const gorillaMarker = document.querySelector(".zoogeography__gorilla-marker");
const alligatorMarker = document.querySelector(".zoogeography__alligator-marker");

const cards = [eagleCard, pandaCard, gorillaCard, alligatorCard];
const markers = [eagleMarker, pandaMarker, gorillaMarker, alligatorMarker];

function addHidden() {
  cards.forEach((card) => {
    card.classList.add("hidden")
})
}
function removeScale() {
  markers.forEach((marker) => {
    marker.classList.remove("scale")
  })
}

eagleMarker.addEventListener("click", () => 
{
  addHidden();
  removeScale();
  eagleMarker.classList.add('scale');
  eagleCard.classList.remove("hidden");
})

pandaMarker.addEventListener("click", () => 
{
  addHidden();
  removeScale();
  pandaMarker.classList.add('scale');
  pandaCard.classList.remove("hidden");
})

gorillaMarker.addEventListener("click", () => 
{
  addHidden();
  removeScale();
  gorillaMarker.classList.add('scale');
  gorillaCard.classList.remove("hidden");
})

alligatorMarker.addEventListener("click", () => 
{
  addHidden();
  removeScale();
  alligatorCard.classList.remove("hidden");
  alligatorMarker.classList.add('scale');
})




// Testimonials




const carousel = document.querySelector('.testimonials__reviews');
const next = document.querySelector('.testimonials__arrow-right');
const prev = document.querySelector(".testimonials__arrow-left");
let gap = 40;
let slideNumber = 0;
let moveTimeout = null;

const mediaQuery = window.matchMedia('(max-width: 1200px)');
if (mediaQuery.matches) gap = 30;

let width = carousel.offsetWidth;
let imgWidth = document.querySelector('.testimonials__review').offsetWidth;
window.addEventListener('resize', (e) => {
  if (mediaQuery.matches) gap = 30;
  carousel.scrollTo((imgWidth + gap) * slideNumber, 0);
  width = carousel.offsetWidth;
  imgWidth = document.querySelector('.testimonials__review').offsetWidth;

});


next.addEventListener('click', e => {
  timeDelay();
  slideNumber++;
  if (slideNumber > 6) {
    slideNumber = 0
  }
  carousel.scrollTo((imgWidth + gap) * slideNumber, 0);

});

prev.addEventListener('click', e => {
  timeDelay();
  slideNumber--;
  if (slideNumber < 0) {
    slideNumber = 6
  }
  carousel.scrollTo((imgWidth + gap) * slideNumber, 0);
});

const moveSlides = () => {
  slideNumber++;
  console.log(slideNumber);
  if (slideNumber > 6) {    
      slideNumber = 0;    
  }
  carousel.scrollTo((imgWidth + gap) * slideNumber, 0);
}

let moveInterval = setInterval(moveSlides, 10000);


const timeDelay = () => {
  clearTimeout(moveTimeout);
  clearInterval(moveInterval);
  moveInterval = null;

  moveTimeout = setTimeout(() => {
    clearInterval(moveInterval);
    moveInterval = setInterval(moveSlides, 10000);
  }, 10000);
}
carousel.addEventListener('click', timeDelay);

