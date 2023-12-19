var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2, // Количество отображаемых слайдов одновременно
  spaceBetween: 30, // Расстояние между слайдами
  centeredSlides: true, // Активация режима центрирования слайдов

  // Опции для пагинации (точек под слайдером)
  pagination: {
    el: ".swiper-pagination", // где будут добавлены точки пагинации
    clickable: true, // Включение возможности клика по точкам для переключения слайдов
  },
  // Опции для навигации (кнопок "Next" и "Prev")
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

