import React from 'react'
import { Navbar,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const NavbarItem = () => {
  return (
    <div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand>Store App</Navbar.Brand>
  <Nav>
  <Nav.Link><Link to="/Cart">Cart</Link> </Nav.Link>
  </Nav>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" bg="dark" variant="dark">
    <Nav className="m-auto">
      <Nav.Link><Link to="/">Home</Link> </Nav.Link>
      <Nav.Link><Link to="/Shoes">Shoes</Link> </Nav.Link>
      <Nav.Link><Link to="/Jacket">Jacket</Link></Nav.Link>
      <Nav.Link><Link to="/Tshirt">T-shirt</Link></Nav.Link>
    </Nav>
    <Nav>
      <Nav bg="light">✔</Nav>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
  )
}
