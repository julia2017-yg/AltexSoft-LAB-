const iconMenu = document.querySelector('.hamburger-menu');
  if(iconMenu) {
    const headerNav = document.querySelector('.header-nav');
    iconMenu.addEventListener('click', function(e){
      document.body.classList.toggle('lock');
      iconMenu.classList.toggle('active');
      headerNav.classList.toggle('active');
    });
  }

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
    dots: false,
    arrows: false,
    speed: 300,
    autoplay: true,
    focusOnSelect: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      }    
    ]
  });
  
  $(window).on('load resize', function() {
    if (window.matchMedia("(max-width: 767px)").matches) {
      $('.plans-card-inner:not(.slick-initialized)').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    } else {
      $('.plans-card-inner.slick-initialized').slick('unslick');
    }
  });
});
