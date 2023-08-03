const emailInfo = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const listCart = document.querySelector(".product-detail");

emailInfo.addEventListener("click", toggleMenu);
menuHamIcon.addEventListener("click", toggleMenuMobile);
cartIcon.addEventListener("click", toggleCart);

function toggleMenu() {
  desktopMenu.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  listCart.classList.add("inactive");
}

function toggleMenuMobile() {
  mobileMenu.classList.toggle("inactive");
  listCart.classList.add("inactive");
  desktopMenu.classList.add("inactive");
}

function toggleCart() {
  listCart.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
}
