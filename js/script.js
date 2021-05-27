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

///////////accordeon///////////////

const tipLink = document.querySelectorAll('.tips__link');
const tipSub = document.querySelectorAll('.block-text');

for (let i = 0; i < tipLink.length; i++) {
  tipLink[i].addEventListener("click", () => {
    tipSub[i].classList.toggle('hidden');
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
  var headerH = document.querySelector("header").clientHeight;
  var faqH = this.document.getElementById("fqas").clientHeight;
  var tipsH = this.document.getElementById("tips").clientHeight;
  var glossaryH = this.document.getElementById("glossary").clientHeight;
  var stickyMenu = document.getElementById("banner-submenu");

  console.log(faqH);

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
// fqasLink.forEach((btn, index) => {
// btn.addEventListener('click', () => {
// fqaSub.forEach((subElem) => {
//        subElem.classList.add('hidden');      });
    
//    fqasLink.forEach((fqaElem) => {
//     fqaElem.classList.remove('fqas__link_active');
//   });
//   fqaSub[index].classList.remove('hidden');
//   btn.classList.add('fqas__link_active');
//   });
//  });
$('.responsive').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
});