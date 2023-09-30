function totalPrice(products) {
  let valueTotal = 0;
  products.forEach((product) => {
    valueTotal += product.price;
  });
  return valueTotal;
}

export { totalPrice };
