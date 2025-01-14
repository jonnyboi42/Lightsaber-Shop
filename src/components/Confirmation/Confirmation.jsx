import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ConfirmationIcon from '../../assets/icons/confirmation.svg'
const Confirmation = () => {
  return (
    <Container fluid className='confirmation-container'>
      <Row>
        <Col>
            <h1>Youre All Set!</h1>
            <p>Confirmation Number: </p>
            <img src={ConfirmationIcon} alt="" />
        </Col>
      </Row>
    </Container>
  )
}

export default Confirmation