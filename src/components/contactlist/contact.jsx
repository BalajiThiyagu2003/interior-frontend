import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/contacts", formData ,{
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('authToken')}`
        }
    });
      alert("Message sent successfully!");
      setFormData({ fullName: "", phoneNumber: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <h2 className="contact-title">Get In Touch</h2>

        {/* Contact Info - Now in a single row and smaller */}
        <Row className="contact-info justify-content-center">
          <Col xs={12} md={3} className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <p>Chennai, India - 600028</p>
          </Col>
          <Col xs={12} md={3} className="contact-card">
            <FaEnvelope className="contact-icon" />
            <p>ktbhelp@gmail.com</p>
          </Col>
          <Col xs={12} md={3} className="contact-card">
            <FaPhone className="contact-icon" />
            <p>+91 98765 4321</p>
          </Col>
        </Row>

        <Form className="contact-form" onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Control
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="form-input"
              />
            </Col>
            <Col md={6}>
              <Form.Control
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="form-input"
              />
            </Col>
          </Row>
          <Form.Control
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
          <Form.Control
            as="textarea"
            rows={4}
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="form-input"
          />
          <Button className="send-button" type="submit">
            Send Message
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
