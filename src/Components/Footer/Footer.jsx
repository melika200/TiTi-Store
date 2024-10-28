import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="text-white text-light pt-2">
      <Container>
        <Row>
          <Col>
            <h5>About Us</h5>
            <p className="fs-6">
              We provide high quality products to enhance your <b>lifestyle</b>.
            </p>
          </Col>
          <Col>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light">
                  Home
                </a>
              </li>
              <li>
                <a href="/product" className="text-light">
                  Products
                </a>
              </li>
              <li>
                <a href="/login" className="text-light">
                  LogIn
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.facebook.com" className="text-light">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" className="text-light">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" className="text-light">
                  Instagram
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className="text-center store">
            <p>&copy; 2023 TiTi-Store. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
