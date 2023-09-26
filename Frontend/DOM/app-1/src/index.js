const baseUrl = "https://platzi-avo.vercel.app";
const container = document.querySelector("#container");

const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(price);
  
  return newPrice;
};

window
  .fetch(`${baseUrl}/api/avo`)
  .then((response) => response.json())
  .then((responseJson) => {
    const allItems = [];
    responseJson.data.forEach((item) => {
      const image = document.createElement("img");
      image.src = `${baseUrl}${item.image}`;
      image.classList =
        "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";

      const title = document.createElement("h2");
      title.textContent = item.name;
      title.classList = "text-lg";

      const price = document.createElement("div");
      price.textContent = formatPrice(item.price);
      price.classList = "text-gray-600";

      const priceAndTitle = document.createElement("div");
      priceAndTitle.classList = "text-center md:text-left";
      priceAndTitle.appendChild(title);
      priceAndTitle.appendChild(price);

      const card = document.createElement("div");
      card.classList = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
      card.appendChild(image);
      card.appendChild(priceAndTitle);

      const container = document.createElement("div");
      container.append(image, title, price);

      allItems.push(container);
    });
    container.append(...allItems);
  });