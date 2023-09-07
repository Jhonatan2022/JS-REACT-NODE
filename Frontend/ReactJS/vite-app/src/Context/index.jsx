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

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
    console.log();
  }, []);

  // Search by title product
  const [searchByTitle, setSearchByTitle] = useState(null);

  // filtered items
  const [filteredItems, setFilteredItems] = useState(null);

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
      }}
    >
      {children}
    </ShoppingCardContext.Provider>
  );
};

export { ShoppingCardProvider, ShoppingCardContext };
