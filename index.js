let slideIndex = 0;
const itemList = [
  "Bbq grills",
  "Beef grill",
  "Burger",
  "Chicken wings",
  "Chicken",
  "Grill",
  "Jollof Rice",
  "Meat pie",
  "Puff Puff",
  "shawarma",
];
function carousel() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 2500);
}

let pslideIndex = 0;

function productSlide() {
  const itemName = document.querySelector(".itemName");
  const pSlides = document.querySelectorAll(".productS");
  const LeftArrow = document.querySelector(".arrowL");
  const rightArrow = document.querySelector(".arrowR");
  LeftArrow.addEventListener("click", () => decrePage(pSlides, itemName));
  rightArrow.addEventListener("click", () => increPage(pSlides, itemName));
  showSlide(pSlides, pslideIndex, itemName);
}

function increPage(container, itName) {
  pslideIndex++;
  showSlide(container, pslideIndex, itName);
}

function decrePage(container, itName) {
  pslideIndex--;
  showSlide(container, pslideIndex, itName);
}

function showSlide(container, pIndex, itName) {
  if (pIndex < 0) {
    pslideIndex = container.length - 1;
  } else if (pIndex >= container.length) {
    pslideIndex = 0;
  }
  container.forEach((slide) => (slide.style.display = "none"));
  container[pslideIndex].style.display = "block";
  itName.textContent = itemList[pslideIndex];
}

document.addEventListener("DOMContentLoaded", function () {
  carousel();
  productSlide();
});
