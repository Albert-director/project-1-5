const createSwiper  = () => {
  return new Swiper('.swiper', {
      direction:'horizontal',
      loop: true,
      spaceBetween: 16,
      slidesPerView: 1.35,
      pagination: {
        el: '.swiper-pagination',
      },
    });
} 

let swiper = null;

function createSSS (){
  if (window.innerWidth>500) {
      if (swiper) {
          swiper.destroy();
          swiper = null;
      }
  } else {
      if (!swiper) swiper = createSwiper();
  }
}
createSSS()
window.addEventListener('resize', createSSS);

let button = document.querySelector('.button-two');
let nav = document.querySelectorAll('.swiper-wrapper');
let img = document.querySelector('.img-button');

button.addEventListener("click", function(evt){
    for (let i=0; i<nav.length; i++){
        nav[i].classList.toggle('button--open');
        img.classList.toggle('img__rotate');
        if (nav[0].classList.contains('button--open')) {
            button.textContent = 'Скрыть';
            
          } else {
            button.textContent = 'Показать все';
            
        }
    };
});