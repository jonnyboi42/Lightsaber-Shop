import { useSelector } from "react-redux";
import React from "react";

const CartPage = () => {
  // Get cart state from Redux store
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} x ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;