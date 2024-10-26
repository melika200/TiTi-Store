import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import "./Login.css"; // Import custom CSS
import NavbarItem from "../../Components/navbarItem/NavbarItem";
import Footer from "../../components/Footer/Footer";

const RegistrationForm = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    passport: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <>
      <NavbarItem />
      <Container className="mt-5">
        <Card className="custom-card shadow-lg p-4 rounded">
          <Card.Title className="text-center mb-4">
            Registration Form
          </Card.Title>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                minLength={3}
                maxLength={15}
                isInvalid={
                  validated &&
                  (formData.username.length < 3 ||
                    formData.username.length > 15)
                }
              />
              <Form.Control.Feedback type="invalid">
                Username must be between 3 and 15 characters long.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="passport">
              <Form.Label>Passport Number</Form.Label>
              <Form.Control
                type="text"
                name="passport"
                value={formData.passport}
                onChange={handleChange}
                required
                minLength={6}
                maxLength={9}
                isInvalid={
                  validated &&
                  (formData.passport.length < 6 || formData.passport.length > 9)
                }
              />
              <Form.Control.Feedback type="invalid">
                Passport number must be between 6 and 9 characters long.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                isInvalid={validated && !/^\S+@\S+\.\S+$/.test(formData.email)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email address.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                pattern="\d{11}"
                isInvalid={validated && !/^\d{11}$/.test(formData.phoneNumber)}
              />
              <Form.Control.Feedback type="invalid">
                Phone number must be exactly 10 digits.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                minLength={10}
                maxLength={100}
                isInvalid={
                  validated &&
                  (formData.address.length < 10 ||
                    formData.address.length > 100)
                }
              />
              <Form.Control.Feedback type="invalid">
                Address must be between 10 and 100 characters long.
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Submit
            </Button>
          </Form>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default RegistrationForm;
