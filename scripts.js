let slideIndex = 0;
let timer;

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  slides[slideIndex-1].style.display = "block";
  timer = setTimeout(showSlides, 10000); // Change slide every 15 seconds
}

function plusSlides(n) {
  clearTimeout(timer);
  showSlides((slideIndex += n-1));
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides();
});