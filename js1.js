(function() {
  // Создаем начальную метку "startLoad"
  performance.mark('startLoad');

  // Событие загрузки страницы
  window.addEventListener('load', function() {
    // Создаем конечную метку "endLoad"
    performance.mark('endLoad');

    // Измеряем время между начальной и конечной метками
    performance.measure('pageLoadTime', 'startLoad', 'endLoad');
    
    // Получаем результат измерения
    var measures = performance.getEntriesByName('pageLoadTime');
    if (measures.length > 0) {
      var loadTime = measures[0].duration;

      // Получаем элемент footer по его id
      var footer = document.getElementById('pageFooter');

      // Вставляем информацию о времени загрузки в подвал
      footer.innerHTML = 'Время загрузки страницы: ' + ' s';
    }
  });
})();
