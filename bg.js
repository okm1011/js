const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imageNumber) {
  const image = new Image();

  image.src = `images/${imageNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function makeRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = makeRandom();
  paintImage(randomNumber);
}
init();