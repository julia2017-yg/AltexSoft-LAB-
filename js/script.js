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

const tipsLink = document.querySelectorAll('.tips__link');
const tipsSub = document.querySelectorAll('.tips-sub');

for (let i = 0; i < tipsLink.length; i++) {
  tipsLink[i].addEventListener("click", () => {
    tipsSub[i].classList.toggle('hidden');
    tipsLink[i].classList.toggle('tips__link_active');
  })
}

