import { createContext, useState } from "react";
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

  // Show product detail
  const [productToShow, setProductToShow] = useState({});

  // Card Products
  const [cardProducts, setCardProducts] = useState([]); // [{id, quantity}


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
      }}
    >
      {children}
    </ShoppingCardContext.Provider>
  );
};

export { ShoppingCardProvider, ShoppingCardContext };
