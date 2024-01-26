import { slidesContent } from "./constants.js";

const partners = [
  "../img/usaid.webp",
  "../img/space.webp",
  "../img/tnt.webp",
  "../img/Tegeta.webp",
  "../img/spectre.webp",
  "../img/tbclizing.webp",
  "../img/ufc.webp",
];
  

const getNewSlides = () => {
  partners.forEach((img) => {
     const sliderImgs = `   <figure class="slideImg">
                        <img src="${img}"/>
                      </figure>`;
    slidesContent.innerHTML += sliderImgs;
  });
};
  
getNewSlides();

const nextButton = document.getElementsByClassName("NextArrow")[0];
const prevButton = document.getElementsByClassName("PrevArrow")[0];
const slides = document.querySelectorAll(".slideImg");
let slideIndex = 0;
let intervalId = null;

const initializeSlider = () => {
  if (slides.length > 0) {
    for (let i = 0; i < 3; i++) {
      slides[i].classList.add("displaySlide");
    }
    intervalId = setInterval(nextSlide, 5000);
  }
};
  
document.addEventListener("DOMContentLoaded", initializeSlider);
  
const displaySlide = (index) => {
  clearInterval(intervalId);
    
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("displaySlide");
  }
  
  for (let i = index; i < index + 3; i++) {
    if (i < slides.length) {
      slides[i].classList.add("displaySlide");
    }
  }
    intervalId = setInterval(nextSlide, 5000);
};
  

const prevSlide = () => {
  slideIndex -= 3;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  displaySlide(slideIndex);
  clearInterval(intervalId);
};
const nextSlide = () => {
  slideIndex += 3;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  displaySlide(slideIndex);
};
  
  
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

const dotsContainer = document.querySelector(".dots");
const dots = dotsContainer.querySelectorAll("span");

const dotClickHandler = (dotIndex) => {
  const slideIndex = dotIndex * 3;
  displaySlide(slideIndex);
};

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    dotClickHandler(index);
  });
});