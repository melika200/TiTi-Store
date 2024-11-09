
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./NotFound.css";

const NotFound = () => (
  <Container className="text-center mt-5">
    <Row>
      <Col>
        <h1 className="text-white">404</h1>
        <p className="text-white">Oops! The page you're looking for doesn't exist.</p>
        <Button variant="primary" as={Link} to="/">Go to Homepage</Button>
      </Col>
    </Row>
  </Container>
);

export default NotFound;
