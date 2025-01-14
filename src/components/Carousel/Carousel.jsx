import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImg2 from '../../assets/imgs/bluesaber.jpg'
import CarouselSaberImg1 from '../../assets/imgs/redsaber.jpg'

const HomePageCarousel = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="carousel-container">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={CarouselSaberImg1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3 className='carousel-heading'>70% Off All Sabers!</h3>
                  <p>Choose from Proffie / SN-Pixel Boards</p>
                  <Button variant="primary" id='shop-now'>Shop Now</Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={CarouselImg2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3 className='carousel-heading'>Free Shipping on Order over $300!</h3>
                  
                  
                </Carousel.Caption>
              </Carousel.Item>
             
            </Carousel>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePageCarousel;
