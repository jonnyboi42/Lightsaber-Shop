import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"; // Import useDispatch
import { removeItem } from "../../redux/cartSlice"; // Import the removeItem action
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CheckoutPage from '../../pages/CheckoutPage/CheckoutPage';

const Cart = () => {
  const dispatch = useDispatch(); // Get dispatch function
  const [checkoutTotal, setCheckoutTotal] = useState(0);
  const navigate = useNavigate();

  // Get cart state from Redux store
  const cart = useSelector((state) => state.cart);

  // Calculate the total whenever the cart changes
  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setCheckoutTotal(total);
  }, [cart]);

  // Handle remove item
  const handleRemove = (id, e) => {
    
    dispatch(removeItem(id)); // Dispatch the removeItem action with item's id
  };

  const handleKeepShoppingClick = (e) =>{
   
    console.log('Keep Shopping Clicked');
    navigate('/');
  }

  return (
    <Container>
      <Row>
        <Col sm={12}>
          <div className="item">
            <ul className='cart-items'>
              <h2>Your Cart Summary</h2>
              {cart.map((item) => (
                <li className='cart-item' key={item.id}>
                  <img className='item-img' src={item.src} alt={item.name} />
                  <div className="item-details">
                    <p>{item.name}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>${item.price}</p>
                    <p>Electronics: {item.electronicType}</p>
                    <Button
                      variant="danger"
                      id='remove-btn'
                      onClick={() => handleRemove(item.id)} // Handle remove click
                    >
                      Remove
                    </Button>
                  </div>
                </li>
              ))}

              <div className="cart-footer">
                <div className="checkout-details">
                    <p>Sub Total</p>
                    <p>Total: ${checkoutTotal.toFixed(2)}</p>
                    <Button variant="primary" id='checkout-btn' onClick={()=> navigate('/checkout')}>Checkout</Button>
                </div>

                <div className="keep-shopping">
                    <Button variant="primary" id='checkout-btn' onClick={ (e) => handleKeepShoppingClick()}>Keep Shopping</Button>
                </div>
              </div> {/* Closing the cart-footer div here */}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
