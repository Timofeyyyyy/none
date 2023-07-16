var inputs = document.querySelectorAll(".quiz__real");
const block = document.querySelectorAll(".quiz__block");
const done = document.querySelectorAll(".quiz__done_block");
const bntSubmit = document.querySelectorAll(".form-done_submit");
const endBlock = document.querySelectorAll(".quiz__end_block");
var isScrollAllowed = true;
var isTransitionAllowed = true;

inputs.forEach(function (input) {
  input.addEventListener("change", function () {
    if (this.checked) {
      if (isScrollAllowed && isTransitionAllowed) {
        isScrollAllowed = false;
        isTransitionAllowed = false;
        setTimeout(function () {
          if (input.getAttribute("data-action") === "finish") {
            window.location.href = "done.html";
          } else {
            swiper.slideNext();
          }

          isScrollAllowed = true;
          isTransitionAllowed = true;
        }, 100);
      }
    }
  });
});

swiper.on("slideChangeTransitionEnd", function () {
  if (isScrollAllowed) {
    swiper.allowSlideNext = true;
  } else {
    swiper.allowSlideNext = false;
  }
});
