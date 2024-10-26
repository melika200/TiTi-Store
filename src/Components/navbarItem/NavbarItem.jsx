import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavbarItem.css";
import { SlBasket } from "react-icons/sl";
import { CiLogin } from "react-icons/ci";

const NavbarItem = ({ openCart }) => {
  return (
    <>
      <Navbar expand="lg" className="nav-full">
        <Container>
          <Navbar.Brand href="/">
            <img className="logo" src="https://craftypixels.com/placeholder-image/600x315/042550/ffffff.png&text=Titi" alt="logo" />
            <span>TiTi-Store</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-between">
            <Nav className="me-auto">
              <Nav.Link className="itemnav" href="/">Home</Nav.Link>
              <Nav.Link className="itemnav" href="/product">Product</Nav.Link>
              <Nav.Link className="itemnav" onClick={openCart}>basket<SlBasket className="px-1 fs-4" /></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="login ms-auto" href="/login">Log In <CiLogin /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarItem;