var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
    scale: 0.7,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  loop: true,
  mousewheel: true,
});
// Pause autoplay on hover
const swiperContainer = document.querySelector('.swiper-wrapper');

swiperContainer.addEventListener('mouseenter', () => {
  swiper.autoplay.stop();
});

swiperContainer.addEventListener('mouseleave', () => {
  swiper.autoplay.start();
});