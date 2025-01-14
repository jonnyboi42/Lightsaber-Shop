import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { setNowViewing } from '../../redux/nowViewingSlice';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'; // Import Form from react-bootstrap

import 'bootstrap/dist/css/bootstrap.min.css';


const Lightsabers = () => {
  const [lightsabers, setLightsabers] = useState([]); // State to store fetched data
  const [quantities, setQuantities] = useState({}); // State for quantities
  const dispatch = useDispatch(); //Initialize dispatch
  const navigate = useNavigate();

  useEffect(() => {

    //Fetch Sabers from Server
    const fetchSabers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/sabers');
        const sabers = response.data;

        // Set fetched sabers
        setLightsabers(sabers);

        // Initialize quantities based on initial data
        const initialQuantities = sabers.reduce((acc, saber) => {
          acc[saber.id] = saber.initialQuantity || 1;
          return acc;
        }, {});
        setQuantities(initialQuantities);
      } catch (error) {
        console.error('Error fetching sabers:', error);
      }
    };

    fetchSabers(); // Call the fetch function on mount
  }, []);

  // Handle quantity change
  const handleQuantityChange = (e, id) => {
    setQuantities({
      ...quantities,
      [id]: parseInt(e.target.value) || 1, // Ensure value is a valid integer
    });
  };

  const handleAddToCart = (saber) => {
    const quantity = quantities[saber.id] || 1;
    dispatch(
      addToCart({
        id: saber.id,
        name: saber.name,
        price:  saber.price,
        quantity,
      })
    )
  }

  const handleClickedSaber = (saber) =>{
    dispatch(
      setNowViewing({
        id: saber.id,
        name: saber.name,
        price: saber.price,
        src: saber.src,
        reviews: saber.reviews,
      }),

    );

    // Navigate to the desired route
    navigate('/saber');

  }

  return (
    <Container id='saber-selection-container'>
      <Row>
      <h1 id='saber-selection'>Selection</h1>
        {lightsabers.map((saber) => (
          <Col lg={3} md={4} sm={6} className="mb-4" key={saber.id}>
            <Card className="saber">
              <a onClick={(e) => handleClickedSaber(saber)}>
              <Card.Img
                variant="top"
                className="saber-img"
                src={saber.src}
                alt={saber.altText}
              />
              </a>

              <Card.Body>
                <Card.Title>{saber.name}</Card.Title>
                <Card.Text>Price: ${saber.price}</Card.Text>
                <Card.Text>{saber.blade}</Card.Text>
                <Card.Text>{saber.shipping}</Card.Text>
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Lightsabers;