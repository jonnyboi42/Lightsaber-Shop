import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state

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
