var typed = new Typed(".profession", {
    strings: ["Computer Engineer", "Software Developer", "a Student"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});

// let slideIndex = 1;
// showSlides(slideIndex);
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("container-project");
    
//     if (n > slides.length) {slideIndex = 1}    
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//     }
//     slides[slideIndex-1].style.display = "flex";  

//     slideIndex++;
//     if (slideIndex >= slides.length) {slideIndex = 1}    
  
    
  
//     setTimeout(showSlides, 2500);
    
//   }