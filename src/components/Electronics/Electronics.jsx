import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Electronics = () => {
  return (
    <Container id='electronics' className="electronics-container">
      <Row>
        <Col>
          <h1>Explore Our Premium Selection of Lightsaber Electronics</h1>
          <p>
            Unlock the power of precision with our top-of-the-line electronic boards. From cutting-edge motion sensors to customizable sound fonts, each board is engineered for ultimate performance. Find the perfect fit for your saber and elevate your experience to a whole new level.
          </p>
        </Col>
      </Row>
      <Row >
        {/* XenoPixel Card */}
        <Col lg={4} md={12} className="mb-4">
          <Card className="pricing-card mx-auto">
            <Card.Body>
              <Card.Title>XenoPixel</Card.Title>
              <Card.Text>
                <ul>
                  <li>Smooth Swing Technology</li>
                  <li>16 Sound Fonts Pre-Installed</li>
                  <li>RGB Blade Support</li>
                  <li>Simple Plug-and-Play Design</li>
                </ul>
              </Card.Text>
              <Card.Text className="electronic-board-price">
                <strong>Price:</strong> $79.99
              </Card.Text>
              <Button className="board-btn" variant="primary">
                Order Now
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* ProffieBoard Card */}
        <Col lg={4} md={12} className="mb-4">
          <Card className="pricing-card mx-auto">
            <Card.Body>
              <Card.Title>Proffie</Card.Title>
              <Card.Text>
                <ul>
                  <li>Open-Source Customization</li>
                  <li>Multiple Blade Effects</li>
                  <li>SD Card Expandability</li>
                  <li>Advanced Motion Detection</li>
                </ul>
              </Card.Text>
              <Card.Text className="electronic-board-price">
                <strong>Price:</strong> $99.99
              </Card.Text>
              <Button className="board-btn" variant="primary">
                Order Now
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Crystal Focus Card */}
        <Col lg={4} md={12} className="mb-4">
          <Card className="pricing-card mx-auto">
            <Card.Body>
              <Card.Title>Crystal Focus</Card.Title>
              <Card.Text>
                <ul>
                  <li>Advanced Customization Options</li>
                  <li>High-Quality Sound Fonts</li>
                  <li>Multi-Blade Support</li>
                  <li>Enhanced Motion Sensing</li>
                </ul>
              </Card.Text>
              <Card.Text className="electronic-board-price">
                <strong>Price:</strong> $129.99
              </Card.Text>
              <Button className="board-btn" variant="primary">
                Order Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Electronics;
