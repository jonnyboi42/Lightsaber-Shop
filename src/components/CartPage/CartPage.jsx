import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const CartPage = () => {
  return (
    <Container>
      <Row>
        <Col >
            <img src="src\assets\imgs\darksaber.webp" alt="" />
        </Col>
        <Col>
            <h1>Dark Saber</h1>
            <p>37 Reviews</p>
            <p>Shipping Calculated at checkout</p>

            <div className="electronics">
                <Button variant="primary">Primary</Button>
            </div>

        </Col>
      </Row>
    </Container>
  )
}

export default CartPage