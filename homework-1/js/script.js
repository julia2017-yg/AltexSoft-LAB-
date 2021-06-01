////////////menu///////////
const iconMenu = document.querySelector('.menu__icon');
  if(iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function(e){
      document.body.classList.toggle('lock');
      iconMenu.classList.toggle('active');
      menuBody.classList.toggle('active');
    });
  }

  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
      document.querySelectorAll('.section').forEach((el, i) => {
        if (el.offsetTop - document.querySelector('#banner-submenu').clientHeight <= scrollDistance) {
          document.querySelectorAll('.submenu a').forEach((el) => {
            if (el.classList.contains('tips-active')) {
              el.classList.remove('tips-active');
            }
          });
  
          document.querySelectorAll('.submenu li')[i].querySelector('a').classList.add('tips-active');
        }
      });
  });
///////////accordeon///////////////

const tipLink = document.querySelectorAll('.tips__link');
const tipSub = document.querySelectorAll('.block-text');
const tipsItemWrap = document.querySelectorAll('.tips-item-wrap');

for (let i = 0; i < tipLink.length; i++) {
  tipLink[i].addEventListener("click", () => {
    tipSub[i].classList.toggle('hidden');
    tipsItemWrap[i].classList.toggle('hidden');
    console.log(tipsItemWrap[i]);
    tipLink[i].classList.toggle('tips__link_active');
    
  })
}

const fqasLink = document.querySelectorAll('.fqas__link');
const tipSubElem = document.querySelectorAll('.block-text-next');

for (let i = 0; i < fqasLink.length; i++) {
  fqasLink[i].addEventListener("click", () => {
    tipSubElem[i].classList.toggle('hidden');
    fqasLink[i].classList.toggle('fqas__link_active');
   })
}
////////tabs scroll

window.addEventListener("scroll", function() {
  var headerH = document.getElementById("banner").clientHeight - document.getElementById("header").clientHeight;
  var faqH = this.document.getElementById("fqas").clientHeight;
  var tipsH = this.document.getElementById("tips").clientHeight;
  var glossaryH = this.document.getElementById("glossary").clientHeight;
  var stickyMenu = document.getElementById("banner-submenu")

  if (window.scrollY > headerH && window.scrollY < faqH + tipsH + glossaryH) {
    stickyMenu.classList.add('sticky');
  }
  else {
    stickyMenu.classList.remove('sticky');
  }
});

window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  header.classList.toggle("sticky-header", window.scrollY > 0);
});

///////slider/////////////

$(document).ready(function(){
  $('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    adaptiveHeight: true,
    infinite: false,
    useTransform: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
   
  });
 
  $('.slider-nav')
    .on('init', function(event, slick) {
      $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
      nextArrow: '<img src="./images/arrow-next.svg" class="next" alt="next">',
      prevArrow: '<img src="./images/arrow-prev.svg" class="prev" alt="prev">',
      slidesToShow: 16,
      slidesToScroll: 16,
      dots: false,
      vertical: true,
      focusOnSelect: false,
      infinite: false,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 16,
          slidesToScroll: 16,
        }
      }, {
        breakpoint: 640,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
       }
      }, {
        breakpoint: 420,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
     }
      }]
    });
 
  $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
  });
 
  $('.slider-nav').on('click', '.slick-slide', function(event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');
 
    $('.slider-single').slick('slickGoTo', goToSingleSlide);
  });
});
