import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavbarItem.css";
import { SlBasket } from "react-icons/sl";
import { CiLogin } from "react-icons/ci";

export default function NavbarItem() {
  return (
    <>
      <Navbar expand="lg" className="nav-full">
        <Container>
          <Navbar.Brand href="/">
            <img className="logo" src="https://craftypixels.com/placeholder-image/600x315/042550/ffffff.png&text=Titi" alt="logo" />
            TiTi-Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-between">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/product">Product</Nav.Link>
              <Nav.Link href="/buy">basket<SlBasket className="px-1 fs-4" /></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="login ms-auto" href="/login">Log In <CiLogin /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
