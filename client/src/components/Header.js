import React from "react";
import {Navbar , Nav , Container} from 'react-bootstrap'
import { LinkContainer} from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
        <Navbar.Brand >CART-HUB</Navbar.Brand>
        </LinkContainer>
        <Nav className="ml-auto">
          <LinkContainer to="/cart">
          <Nav.Link  style={{color : 'white'}}> <i className="fas fa-shopping-cart"></i> CART</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/signup">
          <Nav.Link  style={{color : 'white'}}><i className="fas fa-user-circle ml-4"></i>  LOGIN</Nav.Link>
          </LinkContainer>
        </Nav>
        
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
