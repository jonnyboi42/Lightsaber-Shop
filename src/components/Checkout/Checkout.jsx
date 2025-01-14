import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Checkout = () => {

  const navigate = useNavigate();
  // State variables for form fields
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [checkMeOut, setCheckMeOut] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    console.log('Credit Card Number:', creditCardNumber);
    console.log('Expiration Date:', expirationDate);
    console.log('CVV:', cvv);
    console.log('Address:', address);
    console.log('Address 2:', address2);
    console.log('City:', city);
    console.log('State:', state);
    console.log('Zip:', zip);
    console.log('Check Me Out:', checkMeOut);

    //Route to Confirmation
    navigate('/confirmation');

    // Push the collected data to a database or API here
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        {/* Credit Card Information */}
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCreditCard">
            <Form.Label>Credit Card Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter credit card number"
              value={creditCardNumber}
              onChange={(e) => setCreditCardNumber(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridExpirationDate">
            <Form.Label>Expiration Date</Form.Label>
            <Form.Control
              type="text"
              placeholder="MM/YY"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCVV">
            <Form.Label>CVV</Form.Label>
            <Form.Control
              type="text"
              placeholder="CVV"
              maxLength="4"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </Form.Group>
        </Row>

        {/* Address Information */}
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            placeholder="Apartment, studio, or floor"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            checked={checkMeOut}
            onChange={(e) => setCheckMeOut(e.target.checked)}
          />
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Checkout;
