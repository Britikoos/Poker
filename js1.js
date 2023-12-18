(function() {
  // Функция для измерения времени загрузки страницы
  var startTime = performance.now();

  // Событие загрузки страницы
  window.addEventListener('load', function() {
    var endTime = performance.now();
    var loadTime = performance.now();
    console.log(performance.now());

    // Получаем элемент footer по его id
    var footer = document.getElementById('pageFooter');

    // Вставляем информацию о времени загрузки в подвал
    footer.innerHTML = 'Время загрузки страницы: ' +  loadTime + ' seconds';
  });
})();
