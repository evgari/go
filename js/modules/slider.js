new Swiper('.reviews__slider', {
  autoplay: {
    delay: 20000,
  },
  slidesPerView: 1,
  loop: true,
  spaceBetween: 40, 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});