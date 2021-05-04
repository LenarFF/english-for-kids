
const eagleCard = document.getElementById("eagle-card");
const pandaCard = document.getElementById("panda-card");
const gorillaCard = document.getElementById("gorilla-card");
const alligatorCard = document.getElementById("alligator-card");
const eagleMarker = document.querySelector(".zoogeography__eagle-marker");
const pandaMarker = document.querySelector(".zoogeography__panda-marker");
const gorillaMarker = document.querySelector(".zoogeography__gorilla-marker");
const alligatorMarker = document.querySelector(".zoogeography__alligator-marker");
const mapImg = document.querySelector(".map");

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

mapImg.addEventListener("click", addHidden);

eagleMarker.addEventListener("click", () => 
{
  addHidden();
  removeScale();
  eagleMarker.classList.add('scale');
  eagleCard.classList.remove("hidden");
})

pandaMarker.addEventListener("click", () => 
{
  console.log("panda");
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
