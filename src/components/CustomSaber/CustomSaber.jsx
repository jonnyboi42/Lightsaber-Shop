import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import CustomSaberImg from '../../assets/imgs/customsaber.jpeg'


const CustomSaber = () => {
  return (
    <Container className='customsaber-container'>
      <Row className='customsaber-row'>
        <Col  className='customsaber-photo'>
            <img src={CustomSaberImg}alt="" />
        
        </Col>

        <Col  className='customsaber-text'>
            <div >
                <h1>Customer Saber Builds</h1>
                <p>
                    At Atlas Sabers, we’re not just saber smiths—we’re passionate creators dedicated to making your
                    dream saber a reality. With every swing, clash, and glow, you’ll experience the craftsmanship and
                    care that go into every product. forge your custom saber? Let us help you join the ranks of 
                    true saber wielders today!
                </p>

                <Button id='build-btn' >Start Building</Button>
            </div>


        </Col>
      </Row>

    </Container>
  )
}

export default CustomSaber