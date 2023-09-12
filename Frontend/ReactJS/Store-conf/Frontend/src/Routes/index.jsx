import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../Components/Layout";
import { Home } from "../Containers/Home";
import { Checkout } from "../Containers/Checkout";
import { Information } from "../Containers/Information";
import { Payment } from "../Containers/Payment";
import { Success } from "../Containers/Success";
import { NotFound } from "../Containers/NotFound";
import { AppContext } from "../Context";
import { UseInitialState } from "../Hooks/useInitialState";

function App() {
  const initialState = UseInitialState();

  const isEmpty = Object.keys(initialState.state).length;

  return (
    <>
      {isEmpty > 0 ? (
        <AppContext.Provider value={initialState}>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/checkout/information" element={<Information />} />
                <Route path="/checkout/payment" element={<Payment />} />
                <Route path="/checkout/success" element={<Success />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </AppContext.Provider>
      ) : (
        <h1>Cargando...</h1>
      )}
    </>
  );
}

export { App };
