import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const ShoppingCardContext = createContext();

const ShoppingCardProvider = ({ children }) => {
  ShoppingCardProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  // ShippingCard Count
  const [count, setCount] = useState(0);

  // Product Detail open/close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Checkout Side Menu open/close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  // Show product detail
  const [productToShow, setProductToShow] = useState({});

  // Card Products
  const [cardProducts, setCardProducts] = useState([]); // [{id, quantity}

  // ShoppingCart Order
  const [order, setOrder] = useState([]);

  // GET products from API
  const [items, setItems] = useState(null);

  // Search by title product
  const [searchByTitle, setSearchByTitle] = useState(null);

  // filtered items
  const [filteredItems, setFilteredItems] = useState(null);

  // Search by category product
  const [searchByCategory, setSearchByCategory] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
    console.log();
  }, []);

  const filterItems = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  useEffect(() => {
    if (searchByTitle) {
      setFilteredItems(filterItems(items, searchByTitle));
    }
  }, [searchByTitle, items]);

  const filteredItemsByCategory = (items, searchByCategory) => {
    console.log(items);
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === "BY_TITLE") {
      return filterItems(items, searchByTitle);
    }

    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory);
    }

    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory).filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }

    if (!searchType) {
      return items;
    }
  };

  useEffect(() => {
    if (searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy(
          "BY_TITLE_AND_CATEGORY",
          items,
          searchByTitle,
          searchByCategory
        )
      );
    if (searchByTitle && !searchByCategory)
      setFilteredItems(
        filterBy("BY_TITLE", items, searchByTitle, searchByCategory)
      );
    if (!searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory)
      );
    if (!searchByTitle && !searchByCategory)
      setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));
  }, [items, searchByTitle, searchByCategory]);

  return (
    <ShoppingCardContext.Provider
      value={{
        count,
        setCount,

        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,

        productToShow,
        setProductToShow,

        cardProducts,
        setCardProducts,

        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,

        order,
        setOrder,

        items,
        setItems,

        searchByTitle,
        setSearchByTitle,

        filteredItems,
        setFilteredItems,

        searchByCategory,
        setSearchByCategory,
      }}
    >
      {children}
    </ShoppingCardContext.Provider>
  );
};

export { ShoppingCardProvider, ShoppingCardContext };
