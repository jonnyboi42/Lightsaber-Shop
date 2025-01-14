import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import Cart from "../../components/Cart/Cart";
import React from "react";

const CartPage = () => {
  // Get cart state from Redux store
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <Header/>
      <Cart/>
    </>
  );
};

export default CartPage;