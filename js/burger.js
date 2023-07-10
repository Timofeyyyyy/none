let menuBtns = document.querySelectorAll(".menu-btn");
let menus = document.querySelectorAll(".menu");
let fons = document.querySelectorAll(".fon-burger-menu");
const links = document.querySelectorAll(".burger-link");

for (let i = 0; i < menuBtns.length; i++) {
  menuBtns[i].addEventListener("click", function () {
    menuBtns[i].classList.toggle("active");
    menus[i].classList.toggle("active");
  });
}
