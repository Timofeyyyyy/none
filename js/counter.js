function updateCounter() {
  var counterElement = document.getElementById("counter");
  var currentValue = parseInt(counterElement.textContent);
  var newValue = currentValue + 1;
  counterElement.textContent = newValue;
}

// Запускаем обновление каждые 5 секунд
setInterval(updateCounter, 5000);
