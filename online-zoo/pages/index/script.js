let items = document.querySelectorAll(".famous-pets__col");
const parent = document.querySelector(".famous-pets__images-wrap");
let isEnabled = true;

function hideItem(direction) {
  isEnabled = false;
  items[0].classList.add("to-left");
  setTimeout(hideLeft, 500)
}
function hideLeft() {
  items[0].classList.remove("active", "to-left");
  setItems();
}

function setItems() {
  items[0].classList.remove("active");
  items[3].after(items[0]);
  items = document.querySelectorAll(".famous-pets__col");
}

function hideItemRight(direction) {
  isEnabled = false;
  items[3].classList.add("to-right");
  setTimeout(hideRight, 500)
}
function hideRight() {
  items[3].classList.remove("active", "to-right");
}

function showItem(direction) {
  items[2].classList.add("from-right");  
  items[1].classList.add("from-right");
  items[3].classList.add("next", "from-right");
  parent.classList.add("moreWidth");
  setTimeout(showLeft, 500)
}
function showLeft() {
  isEnabled = true;  
  items[2].classList.remove("from-right", "next");  
  items[1].classList.remove("from-right", "next");
  items[0].classList.remove("from-right", "next");  
  items[3].classList.remove("from-right", "next");
  items[3].classList.remove("next", "from-right");
  parent.classList.remove("moreWidth");
  items[2].classList.add("active");  
}

function showItemRight(direction) {
  items[2].classList.add("from-left");
  items[1].classList.add("from-left");
  items[0].classList.add("next", "from-left");
  parent.classList.add("moreWidth");
  setTimeout(showRight, 500)   
}

function showRight () {
  items[0].classList.remove("next", "from-left");
  parent.classList.remove("moreWidth");
  items[0].classList.add("active");
  isEnabled = true;
items[2].classList.remove("from-left", "next");  
items[1].classList.remove("from-left", "next"); 
items[0].classList.remove("from-left", "next"); 
items[3].classList.remove("from-left", "next"); 
}

function previousItem() {
  hideItemRight("to-right");  
  showItemRight("from-left");
}

function nextItem() {
  hideItem("to-left");
  showItem("from-right");
}

document.querySelector(".famous-pets__right").addEventListener("click", function() {
  if (isEnabled) {
    items[0].before(items[3]);
    items = document.querySelectorAll(".famous-pets__col");
    previousItem();
  }
})
document.querySelector(".famous-pets__left").addEventListener("click", function() {
  if (isEnabled) {
    
    nextItem();
  }
})



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
const gap = 40;
let slideNumber = 0;
let moveTimeout = null;

let width = carousel.offsetWidth;
let imgWidth = document.querySelector('.testimonials__review').offsetWidth;
window.addEventListener('resize', (e) => {
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
  if (slideNumber> 6) {    
      slideNumber= 0;    
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

