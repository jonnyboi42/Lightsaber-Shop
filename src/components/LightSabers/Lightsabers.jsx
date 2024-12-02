import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'; // Import Form from react-bootstrap

import 'bootstrap/dist/css/bootstrap.min.css';

const Lightsabers = () => {
  const [quantities, setQuantities] = useState({
    darkSaber: 1,
    lukeSaber: 1,
    booneSaber: 1,
    vaderSaber: 1
  });

  // Handle quantity change
  const handleQuantityChange = (e, item) => {
    setQuantities({
      ...quantities,
      [item]: parseInt(e.target.value) || 1 // Ensure value is a valid integer
    });
  };

  return (
    <Container>
      <Row className="justify-content-center">
        {/* Dark Saber */}
        <Col lg={3} md={4} sm={6} className="mb-4">
          <Card className="item">
            <Card.Img variant="top" className='saber-img' src="src/assets/imgs/darksaber.webp" alt="Dark Saber" />
            <Card.Body>
              <Card.Title>Dark Saber</Card.Title>
              <Card.Text>Price: $497.65</Card.Text>
              <Form>
                <Form.Group controlId="darkSaberQuantity">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    min="1"
                    value={quantities.darkSaber}
                    onChange={(e) => handleQuantityChange(e, 'darkSaber')}
                  />
                </Form.Group>
                <Button variant="primary">BUY NOW</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Luke Saber */}
        <Col lg={3} md={4} sm={6} className="mb-4">
          <Card className="item">
            <Card.Img variant="top" className='saber-img' src="src/assets/imgs/lukelightsaber.webp" alt="Luke Saber" />
            <Card.Body>
              <Card.Title>Luke Saber</Card.Title>
              <Card.Text>Price: $497.65</Card.Text>
              <Form>
                <Form.Group controlId="lukeSaberQuantity">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    min="1"
                    value={quantities.lukeSaber}
                    onChange={(e) => handleQuantityChange(e, 'lukeSaber')}
                  />
                </Form.Group>
                <Button variant="primary">BUY NOW</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Boone Saber */}
        <Col lg={3} md={4} sm={6} className="mb-4">
          <Card className="item">
            <Card.Img variant="top" className='saber-img' src="src/assets/imgs/boonelightsaber.webp" alt="Boone Saber" />
            <Card.Body>
              <Card.Title>Boone Saber</Card.Title>
              <Card.Text>Price: $497.65</Card.Text>
              <Form>
                <Form.Group controlId="booneSaberQuantity">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    min="1"
                    value={quantities.booneSaber}
                    onChange={(e) => handleQuantityChange(e, 'booneSaber')}
                  />
                </Form.Group>
                <Button variant="primary">BUY NOW</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Vader Saber */}
        <Col lg={3} md={4} sm={6} className="mb-4">
          <Card className="item">
            <Card.Img variant="top" className='saber-img' src="src/assets/imgs/vaderlightsaber.webp" alt="Vader Saber" />
            <Card.Body>
              <Card.Title>Vader Saber</Card.Title>
              <Card.Text>Price: $497.65</Card.Text>
              <Form>
                <Form.Group controlId="vaderSaberQuantity">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    min="1"
                    value={quantities.vaderSaber}
                    onChange={(e) => handleQuantityChange(e, 'vaderSaber')}
                  />
                </Form.Group>
                <Button variant="primary">BUY NOW</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    
    


  );
};

export default Lightsabers;
