import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import cartIcon from '../../assets/icons/cart.svg';

const Header = () => {
  const navigate = useNavigate();

  const handleScrollToSection = (id) =>{
    const section = document.getElementById(id);
    if(section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary header-bar">
    <Container id='navbar-container'>
      <Navbar.Brand href="#">ATLAS</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1" onClick={()=> navigate('/')}>Home</Nav.Link>
          <Nav.Link href="#action1" onClick={() => handleScrollToSection('saber-selection-container')}>Sabers</Nav.Link>
          <Nav.Link href="#action1" onClick={()=> handleScrollToSection('electronics')}>Electronics</Nav.Link>
          
          
        </Nav>
        <Form className="d-flex">
          <Nav.Link href="#action2" onClick={() =>{navigate('/cart')}}><img src={cartIcon} alt="" /></Nav.Link>
          
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;
