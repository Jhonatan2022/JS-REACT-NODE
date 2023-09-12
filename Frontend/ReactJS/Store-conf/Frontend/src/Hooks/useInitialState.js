import { useEffect, useState } from "react";
import axios from "axios";
import initialState from "../initialState";

const API_URL = "http://localhost:1337/api/products";

function UseInitialState() {
  const [state, setState] = useState(initialState);
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   // Función asincrónica para realizar la solicitud a la API
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(API_URL);
  //       setProducts(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error("Error al consultar la API:", error);
  //     }
  //   };

  //   // Llama a la función fetchData cuando el componente se monta
  //   fetchData();
  // }, []);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(API_URL);
      setProducts(response.data.data);
      console.log(response);  
    }
    getData();
  }, []);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    products,
    state,
  };
}

export { UseInitialState };
