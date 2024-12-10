import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'; // Import Form from react-bootstrap
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
// Import the star icon (replace with your actual icon path or component)
import starIcon from '../../assets/icons/star.svg';

const Saber = () => {
  
  const selectedSaber = useSelector((state) => state.nowViewing);
  const [saber, setSaber] = useState([]);
  const dispatch = useDispatch(); //Initialize dispatch
  const navigate = useNavigate();
  




  // Function to render stars based on the number of reviews
  const renderStars = (reviews) => {
    const maxStars = 5; // Assuming a 5-star system
    const stars = Math.round((reviews / 57) * maxStars); // Normalize reviews to a 5-star rating
    return (
      <div className="stars">
        {Array.from({ length: stars }, (_, index) => (
          <img
            key={index}
            src={starIcon}
            alt="star"
            style={{ width: '20px', marginRight: '5px' }}
          />
        ))}
        {Array.from({ length: maxStars - stars }, (_, index) => (
          <img
            key={`empty-${index}`}
            src={starIcon}
            alt="empty star"
            style={{
              width: '20px',
              marginRight: '5px',
              opacity: 0.3, // Indicate an empty star
            }}
          />
        ))}
      </div>
    );
  };


  return (
    <Container>
      <Row className="d-flex gap-5">
        <Col lg={8} md={8}>
          <Image className="saber" src="src/assets/imgs/darksaber.webp" />
        </Col>
        <Col>
          <h1>{selectedSaber.name}</h1>
          <p>Reviews: {selectedSaber.reviews}</p>
          <div>{renderStars(selectedSaber.reviews)}</div>
          <p>${selectedSaber.price}</p>
          <p>Shipping Calculated at checkout</p>

          <div className="electronic-options">
            <Button className='pixel-button' variant="primary">SN-Pixel-V4 Pro</Button>
            <Button className='proffie-button' variant="primary">ProffieBoard V2</Button>
          </div>

          <div className="item-promises">
            <p>Free worldwide shipping for ATLAS Sabers</p>
            <p>Free domestic shipping for ATLAS Sabers</p>
            <p>Shipping Insured Guarantee</p>
            <p>12-Month Warranty & Lifetime Tech Support</p>
            <p>In stock, ready to ship</p>
          </div>

          <Form>
                <Form.Group controlId={`${selectedSaber.id}Quantity`}>
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control className='quantity-button'
                    type="number"
                    min="1"
                    value={1}
                    onChange={(e) => handleQuantityChange(e, saber.id)}
                  />
                </Form.Group>
                <Button className='add-to-cart-button'
                  variant="primary"
                  onClick={() => handleAddToCart(saber)}
                >
                  ADD TO CART
                </Button>
          </Form>

        
        </Col>
      </Row>
    </Container>
  );
};

export default Saber;
