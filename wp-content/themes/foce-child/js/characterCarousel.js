const sampleSlider = new Swiper(".sample-slider", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // if pagination(dots) is needed
  pagination: {
    el: ".swiper-pagination",
  },
});

console.log(sampleSlider);
