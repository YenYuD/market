const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",
  // freeMode: true,
  // centeredSlides: true,
  slidesOffsetBefore: 40,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
