import React from 'react';
import logo from './logo.webp';
import CartWidget from '../CartWidget/CartWidget';
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap';
import './NavBar.css';
// import Link from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'
import { useState } from 'react';
import useCartContext from '../../store/CartContext.jsx';



function NavBar(props) {
  const [expanded, setExpanded] = useState(false);
  const { contextFunction  } = useCartContext();
  contextFunction();
    return (
<header>
<nav>
<Navbar expanded={expanded} className="headlogbg" bg="light" expand="lg">
  <Container>
  <LinkContainer to="/"><Navbar.Brand className="swirl-in-fwd"><img className="navbar-brand" src={logo} width="150px" alt="logo" /></Navbar.Brand></LinkContainer>
  
    <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <LinkContainer onClick={() => setExpanded(false)} to="/inicio"><Nav.Link href="#home">Inicio</Nav.Link></LinkContainer>
        <NavDropdown title="Componentes" id="basic-nav-dropdown">
        <LinkContainer onClick={() => setExpanded(false)} to="/"><NavDropdown.Item>Todo</NavDropdown.Item></LinkContainer>  
        <LinkContainer onClick={() => setExpanded(false)} to="/category/cpu"><NavDropdown.Item>Procesadores</NavDropdown.Item></LinkContainer>
        <LinkContainer onClick={() => setExpanded(false)} to="/category/motherboard"><NavDropdown.Item>Placas Madre</NavDropdown.Item></LinkContainer>
        <LinkContainer onClick={() => setExpanded(false)} to="/category/ram"><NavDropdown.Item>Memoria Ram</NavDropdown.Item></LinkContainer>
        <LinkContainer onClick={() => setExpanded(false)} to="/category/vga"><NavDropdown.Item>VGA</NavDropdown.Item></LinkContainer>
        <LinkContainer onClick={() => setExpanded(false)} to="/category/psu"><NavDropdown.Item>Fuente de alimentacion</NavDropdown.Item></LinkContainer>
        <LinkContainer onClick={() => setExpanded(false)} to="/category/gabinete"><NavDropdown.Item>Gabinetes</NavDropdown.Item></LinkContainer>
        <LinkContainer onClick={() => setExpanded(false)} to="/category/almacenamiento"><NavDropdown.Item>Almacenamiento</NavDropdown.Item></LinkContainer>
        <LinkContainer onClick={() => setExpanded(false)} to="/category/perifericos"><NavDropdown.Item>Perifericos</NavDropdown.Item></LinkContainer>


          <NavDropdown.Divider />
          <LinkContainer onClick={() => setExpanded(false)} to="/category/ofertas"><NavDropdown.Item>Ofertas</NavDropdown.Item></LinkContainer>
        </NavDropdown>
        <LinkContainer onClick={() => setExpanded(false)} to="/servicios"><Nav.Link href="/servicios">Servicios</Nav.Link></LinkContainer>
        <LinkContainer onClick={() => setExpanded(false)} to="/acercade"><Nav.Link href="/acercade">Acerca</Nav.Link></LinkContainer>
        <LinkContainer onClick={() => setExpanded(false)} to="/contacto"><Nav.Link href="/contacto">Contacto</Nav.Link></LinkContainer>
        
      </Nav>
      
    </Navbar.Collapse>
    <CartWidget />
  </Container>
  
  </Navbar>
  </nav>
  </header>
    );
}

export default NavBar;