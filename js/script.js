let button = document.querySelector('.button-two');
let nav = document.querySelectorAll('.nav__list');


button.addEventListener("click", function(evt){
    for (let i=0; i<nav.length; i++){
        nav[i].classList.toggle('button--open');
        if (nav[0].classList.contains('button--open')) {
            button.textContent = 'Скрыть';
          } else {
            button.textContent = 'Показать все';
        }
    }
})


const swiper = new Swiper('.mySwiper', {

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    mousehell: true,
    Keyboard: true,
    slidesPerView: 2,
    spaceBetween: 220,
  });
