import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Cart = () => {

  return (
    <Container>
      <Row className='d-flex gap-5'>
        <Col lg={8} md={8} >
            
            <Image className='saber' src="src\assets\imgs\darksaber.webp"/>
        </Col>
        <Col>
            <h1>Dark Saber</h1>
            <p>37 Reviews</p>
            <p>Shipping Calculated at checkout</p>

            <div className="electronic-options">
                <Button variant="primary">SN-Pixel-V4 Pro</Button>
                <Button variant="primary">ProffieBoard V2</Button>
            </div>

            <div className="item-promises">
              <p>Free worldwide shipping for ATLAS Sabers</p>
              <p>Free domestic shipping for ATLAS Sabers</p> 
              <p>Shipping Insured Guarantee</p>
              <p>12-Month Warranty & Lifetime Tech Support</p>
              <p>In stock, ready to ship</p>
            </div>

        </Col>
      </Row>
    </Container>
  )
  
}

export default Cart