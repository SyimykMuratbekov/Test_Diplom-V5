  // Получаем все слайды и индекс текущего слайда
  var slides = document.querySelectorAll('.slider-main > .slide');
  var currentSlideIndex = 0;

  // Функция для отображения следующего слайда
  function showNextSlide() {
    // Скрыть текущий слайд
    slides[currentSlideIndex].style.display = 'none';
    // Увеличить индекс слайда, или вернуться к началу, если достигнут конец
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    // Показать следующий слайд
    slides[currentSlideIndex].style.display = 'block';
  }

  // Показать первый слайд
  showNextSlide();

  // Установить интервал для автоматического переключения слайдов
  setInterval(showNextSlide, 2500); // 3000 миллисекунд = 3 секунды