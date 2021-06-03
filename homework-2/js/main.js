////////////menu///////////
const iconMenu = document.querySelector('.menu-icon');
  if(iconMenu) {
    const menuBody = document.querySelector('.menu-body');
    iconMenu.addEventListener("click", function(e){
      document.body.classList.toggle('lock');
      iconMenu.classList.toggle('active');
      menuBody.classList.toggle('active');
    });
  }

//////////sticky header////////////
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky-header", window.scrollY > 0);
});

$(document).ready(function(){ 
  $('.slider_inner').slick({
    dots: true,
    dotsClass: "my-dots",
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  });
          
 
});