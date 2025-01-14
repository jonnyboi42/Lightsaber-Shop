import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'; 
import backArrowIcon from '../../assets/icons/backarrow.svg'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import GlobeIcon from '../../assets/icons/globe.svg'
import CheckIcon from '../../assets/icons/checkmark.svg'
import insuredIcon from '../../assets/icons/insured.svg'

import starIcon from '../../assets/icons/star.svg';

const Saber = () => {
  const selectedSaber = useSelector((state) => state.nowViewing);
  const [selectedElectronic, setSelectedElectronic] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [errorMessage, setErrorMessage] = useState(''); // State for error message
  const [successMessage, setSuccessMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to handle electronic selection
  const handleElectronicClick = (electronicName) => {
    setSelectedElectronic(electronicName);
    setErrorMessage(''); // Clear error message when a valid option is selected
    setSuccessMessage(''); // Clear success message when a new electronic is selected
  };

  // Function to handle quantity changes
  const handleQuantityChange = (event) => {
    const newQuantity = Math.max(1, parseInt(event.target.value, 10) || 1);
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    if (!selectedElectronic) {
      setErrorMessage('Electronic Type Not Selected'); // Set error message if no type is selected
      return;
    }

    dispatch(addToCart({ ...selectedSaber, quantity, electronicType: selectedElectronic }));
    setErrorMessage(''); // Clear the error message after successful addition
    setSuccessMessage('Added to Cart!'); // Show success message
  };

  const handleKeepShoppingClick = () => {
    navigate('/');
  };

  return (
    <Container className='selected-saber-container'>
      <Row className="d-flex gap-5">
        <Col lg={8} md={8}>
          <Image className="saber" src={selectedSaber.src} />
        </Col>
        <Col>
          <h1>{selectedSaber.name}</h1>
          <p>Reviews: {selectedSaber.reviews}</p>
          <div>{renderStars(selectedSaber.reviews)}</div>
          <p>${selectedSaber.price}</p>
          <p>Shipping Calculated at checkout</p>

          <div className="electronic-options">
            <Button
              className={`pixel-button ${selectedElectronic === 'SN-Pixel-V4 Pro' ? 'active' : ''}`}
              variant={selectedElectronic === 'SN-Pixel-V4 Pro' ? 'success' : 'primary'}
              onClick={() => handleElectronicClick('SN-Pixel-V4 Pro')}
            >
              SN-Pixel-V4 Pro
            </Button>
            <Button
              className={`proffie-button ${selectedElectronic === 'ProffieBoard V2' ? 'active' : ''}`}
              variant={selectedElectronic === 'ProffieBoard V2' ? 'success' : 'primary'}
              onClick={() => handleElectronicClick('ProffieBoard V2')}
            >
              ProffieBoard V2
            </Button>
          </div>

          <div className="item-promises">
            <p><img src={GlobeIcon} alt="" />Free worldwide shipping for ATLAS Sabers</p>
            <p><img src={CheckIcon} alt="" />Shipping Insured Guarantee</p>
            <p> <img src={insuredIcon} alt="" />  12-Month Warranty & Lifetime Tech Support</p>
            <p>In stock, ready to ship</p>
          </div>

          <Form className="quantity-addtocart-btns">
            
              <div className="quantity">
                <Form.Group controlId={`${selectedSaber.id}Quantity`}>
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    className="quantity-button"
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                  />
                </Form.Group>
              </div>


              <div className="addtocart">
                <Button
                  className="add-to-cart-button"
                  variant="primary"
                  onClick={handleAddToCart} // Use the updated handler
                >
                  ADD TO CART
                </Button>
              </div>


          </Form>



          {/* // Render Success & Error Messages */}
          {errorMessage && (
              <p style={{ color: 'red', fontWeight: 'bold' }}>{errorMessage}</p> // Display error message
          )}
          {successMessage && (
            <p style={{ color: 'green', fontWeight: 'bold' }}>{successMessage}</p>
          )}

          <Form>
            <Button
                className="keep-shopping-button"
                variant="primary"
                onClick={handleKeepShoppingClick}
              >
                <img src={backArrowIcon} alt="" />
                Keep Shopping
                
              </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

// Helper function for rendering stars
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

export default Saber;
