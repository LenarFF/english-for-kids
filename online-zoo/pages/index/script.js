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