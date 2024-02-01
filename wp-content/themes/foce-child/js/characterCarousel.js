const sampleSlider = new Swiper(".sample-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1.5,
  spaceBetween: 10,
  loop: "true",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 0,
    slideShadows: false,
  },
  breakpoints: {
    700: {
      slidesPerView: 3,
    },
  },
  keyboard: {
    enabled: true,
  },
});
