let mainCam = document.querySelector(".main-cam__video");
let otherCam = document.querySelectorAll(".other-cams__video");
const plug = document.querySelectorAll(".other-cams__hidden-content")



plug.forEach((cam) => {
  cam.addEventListener("click", function() {
    let mainSRC = mainCam.src;
    mainCam.src = this.parentNode.querySelector(".other-cams__video").src
    this.parentNode.querySelector(".other-cams__video").src = mainSRC
  })
})