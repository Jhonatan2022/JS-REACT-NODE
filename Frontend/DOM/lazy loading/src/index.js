import { registerImage } from "./lazy";

const minimum = 1;
const maximum = 122;
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

const createImage = () => {
  const container = document.createElement("div");
  container.className = "p-4";
  const image = document.createElement("img");
  image.className = "mx-auto";
  image.width = "320";
  image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

  container.appendChild(image);
  return container;
};

const newImage = createImage();
const mountNode = document.getElementById("images");
const addButton = document.querySelector("button");

const addImage = () => {
  const newImage = createImage();
  mountNode.appendChild(newImage);
  registerImage(newImage);
};

addButton.addEventListener("click", addImage);