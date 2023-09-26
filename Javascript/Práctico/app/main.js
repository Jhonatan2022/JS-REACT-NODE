const emailInfo = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const cartIcon = document.querySelector(".navbar-shopping-cart");
const listCart = document.querySelector("#shoppingCartContainer");

const detailProductContainer = document.querySelector("#productDetail");

const iconClose = document.querySelector(".product-detail-close");

emailInfo.addEventListener("click", toggleMenu);
menuHamIcon.addEventListener("click", toggleMenuMobile);
cartIcon.addEventListener("click", toggleCart);
iconClose.addEventListener("click", closeProductDetail);

function toggleMenu() {
  desktopMenu.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  listCart.classList.add("inactive");
  detailProductContainer.classList.add("inactive");
}

function toggleMenuMobile() {
  mobileMenu.classList.toggle("inactive");
  listCart.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  detailProductContainer.classList.add("inactive");
}

function toggleCart() {
  listCart.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  detailProductContainer.classList.add("inactive");
}

function openProductDetail() {
  detailProductContainer.classList.remove("inactive");
  listCart.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
}

function closeProductDetail() {
  detailProductContainer.classList.add("inactive");
}

const productList = [];

productList.push({
  name: "Bake",
  price: 100,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Bake",
  price: 100,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(list) {
  for (product of list) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.addEventListener("click", openProductDetail);

    productCard.innerHTML = `
    <img src="${product.image}"
    alt="${product.name}">
    <div class="product-info">
        <div>
            <p>${product.price}</p>
            <p>${product.name}</p>
        </div>
        <figure>
            <img src="./img/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
    `;
    document.querySelector(".cards-container").appendChild(productCard);
  }
}

renderProducts(productList);