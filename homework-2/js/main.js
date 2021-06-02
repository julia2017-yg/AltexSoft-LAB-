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