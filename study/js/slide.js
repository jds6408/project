var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
    
    console.log(slides.length);
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} //(오른쪽)사진4이상 5가되면 slideIndex 다시 원점으로
  if (n < 1) {slideIndex = slides.length} 
    //(왼쪽)사진0일 경우 slideIndex = slides.length(slideIndex+1 == 0이 될 수 없고 마지막 사진4) 
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; //모든 슬라이드 display none
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", ""); // active없애기
  }
  slides[slideIndex-1].style.display = "block";  // 현 slide만 block 상태
  dots[slideIndex-1].className += " active"; // 현 slide의 dot부분만 active 상태
}