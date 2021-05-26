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