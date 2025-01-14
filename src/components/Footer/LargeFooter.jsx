import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LargeFooter() {
  return (
    <Container className='large-footer-container' fluid>
      <Row className='large-footer-row'>
        <Col>
            <h1>Address</h1>
            <p>64762 P. SHERMAN WAY</p>
            <p>AUSTIN, TX</p>
            <p>48184</p>
            <p>USA</p>
        
        </Col>

        <Col>
        <h1>INFORMATION</h1>
        <p>About Us</p>
        <p>Contact Us</p>
        Frequently Asked Questions (FAQ)
        
        </Col>


        <Col>
        <h1>TERMS</h1>
        <p>Privacy Policy</p>
        <p>Shipping Policy</p>
        <p>Terms Of Service</p>
        <p>Return and Refund Policy</p>
        </Col>

        <Col>
        <h1>SELLERS</h1>
        <p>LI Sabers</p>
        <p>P43 Ni Sabers</p>
        <p>KFR Sabers</p>
        <p>67Sabers</p>
        
        </Col>
      </Row>
    </Container>
  )
}

export default LargeFooter