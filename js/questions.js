const labels = document.querySelectorAll(".quiz__label");
const items = document.querySelectorAll(".quiz__item");

labels.forEach(function (label, index) {
  label.addEventListener("click", function () {
    items[index].classList.toggle("active");
    console.log(items);
  });
});
