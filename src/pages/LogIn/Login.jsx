import React from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import * as Yup from "yup";
import "./Login.css";
import NavbarItem from "../../Components/NavbarItem/NavbarItem";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Formik } from "formik";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
    email: "",
    phoneNumber: "",
    address: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Username must be between 3 and 15 characters long.")
      .max(15, "Username must be between 3 and 15 characters long.")
      .required("Username is required"),
    password: Yup.string()
      .min(6, "password number must be between 6 and 9 characters long.")
      .max(9, "password number must be between 6 and 9 characters long.")
      .required("password number is required"),
    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^\d{11}$/, "Phone number must be exactly 11 digits.")
      .required("Phone number is required"),
    address: Yup.string()
      .min(10, "Address must be between 10 and 100 characters long.")
      .max(100, "Address must be between 10 and 100 characters long.")
      .required("Address is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    localStorage.setItem("userInfo", JSON.stringify(values));
    Swal.fire({
      title: 'Success!',
      text: 'Registration successful! Welcome to TiTi Store. Enjoy it :)',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      navigate('/');
    });
    setSubmitting(false);
  };

  return (
    <>
      <NavbarItem />
      <Container className="mt-5">
        <Card className="custom-card shadow-lg p-4 rounded">
          <Card.Title className="text-center mb-4">Registration Form</Card.Title>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.username && !!errors.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>password Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.password && !!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.email && !!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="phoneNumber">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phoneNumber"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.phoneNumber && !!errors.phoneNumber}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.phoneNumber}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.address && !!errors.address}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.address}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 mt-3" disabled={isSubmitting}>
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default RegistrationForm;
