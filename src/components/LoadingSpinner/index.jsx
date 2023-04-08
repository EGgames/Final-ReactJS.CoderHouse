import React from 'react';
import { Spinner, Container } from 'react-bootstrap';
import wolf from '../../assets/images/wolf_logo_big.webp';

function LoadingSpinner() {
  return (
    <Container><img src={wolf} alt="wolf logo" className="img-fluid" /><Spinner animation="border" role="status">
  <span className="visually-hidden">Cargando...</span>
</Spinner>

</Container>
  )
}

export default LoadingSpinner