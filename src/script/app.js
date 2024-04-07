let images = document.querySelector("#img-animation");
let imagesArray = [
  "src/assets/img/barny.jpg",
  "src/assets/img/cortina.jpg",
  "src/assets/img/saal.jpg",
];
let index = 0;

document.addEventListener("DOMContentLoaded", () => {
  const slideShow = () => {
    if (index < 0) {
      index = imagesArray.length - 1;
    } else if (index >= imagesArray.length) {
      index = 0;
    }
   
    images.src = imagesArray[index];
  };
  setInterval(() => {
    index++;
    setTimeout(() => {
      slideShow();
    }, 5000);
  }, 5000);
});
