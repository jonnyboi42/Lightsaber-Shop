import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BrowseSelection = () => {
  return (
    <Container className='browsesaber-container'>
    <Row className='browsesaber-row'>
      <Col className='browsesaber-text'>
      <h1>Discover the Galaxy's Finest Lightsabers!</h1>
            <p>
            Browse our wide selection of meticulously crafted sabers, designed for every Jedi, 
            Sith, and enthusiast. Whether you're looking for sleek, elegant designs or bold,
            battle-ready hilts, we have the perfect saber waiting for you!"

            </p>
      </Col>
    </Row>
  </Container>
  )
}

export default BrowseSelection