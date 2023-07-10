function countdown() {
  // Получаем элементы для часов, минут и секунд
  var hoursElement = document.getElementById("hours");
  var minutesElement = document.getElementById("min");
  var secondsElement = document.getElementById("sec");

  // Задаем начальные значения времени
  var hours = 23;
  var minutes = 60;
  var seconds = 0;

  // Функция для обновления времени
  function updateTimer() {
    // Уменьшаем секунды
    seconds--;
    // Если секунды становятся отрицательными, уменьшаем минуты
    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }
    // Если минуты становятся отрицательными, уменьшаем часы
    if (minutes < 0) {
      minutes = 59;
      hours--;
    }

    // Обновляем значения в элементах
    hoursElement.textContent = hours.toString().padStart(2, "0");
    minutesElement.textContent = minutes.toString().padStart(2, "0");
    secondsElement.textContent = seconds.toString().padStart(2, "0");

    // Если время истекло, останавливаем обратный отсчет
    if (hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(timer);
    }
  }

  // Обновляем время каждую секунду
  var timer = setInterval(updateTimer, 1000);
}

// Запускаем обратный отсчет при загрузке страницы
document.addEventListener("DOMContentLoaded", countdown);
