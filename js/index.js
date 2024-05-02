let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  console.log("0000000000   " + n);
  showSlides((slideIndex = n));
}
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // slideIncrement;
  slideIndex++;
  if (slideIndex == 4) {
    slideDecrement;
  }

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function slideDecrement() {
  slideIndex--;
  if (slideIndex > 0) {
    slideIncrement;
  }
}
