////////////menu///////////
const iconMenu = document.querySelector('.hamburger-menu');
  if(iconMenu) {
    const menuBody = document.querySelector('.menu-body');
    iconMenu.addEventListener('click', function(e){
      document.body.classList.toggle('lock');
      iconMenu.classList.toggle('active');
      menuBody.classList.toggle('active');
    });
  }

//////////sticky header////////////
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky-header', window.scrollY > 0);
});

$(document).ready(function(){ 
  $('.slider_inner').slick({
    dots: true,
    dotsClass: 'my-dots',
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    mobileFirst: true,
  });
  $('.slider-logo-single',).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-logo-list'
  });

  $('.slider-logo-list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-logo-single',
    dots: true,
    arrows: false,
    speed: 300,
    //autoplay: true,
    focusOnSelect: true,
    mobileFirst: true,
    responsive: [
       {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });
  //slider plans 
  $(window).on('load resize', function() {
    if ($(window).width() < 640) {
      $('.planse-card-inner:not(.slick-initialized)').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    } else {
      $('.planse-card-inner.slick-initialized').slick('unslick');
    }
  });
});