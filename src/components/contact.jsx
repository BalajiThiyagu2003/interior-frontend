import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <Container>
        <h2 className="contact-title mt-5">Reach Us</h2>

        {/* Contact Info with Hover Effect */}
        <Row className="contact-info">
          <Col md={4}>
            <div>
              <i className="fas fa-map-marker-alt contact-icon"></i>
              <h4>Chennai, India - 600028</h4>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <i className="fas fa-envelope contact-icon"></i>
              <h4>ktbhelp@gmail.com</h4>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <i className="fas fa-phone contact-icon"></i>
              <h4>+91987654321</h4>
            </div>
          </Col>
        </Row>

        {/* Contact Form with Smooth Transitions */}
        <Form className="contact-form">
          <Row>
            <Col md={6}>
              <Form.Control type="text" placeholder="Full Name" required />
            </Col>
            <Col md={6}>
              <Form.Control type="text" placeholder="Phone Number" required />
            </Col>
          </Row>
          <Form.Control type="email" placeholder="Email Address" required />
          <Form.Control as="textarea" rows={4} placeholder="Message" required />
          <Button className="send-button" type="submit">
            Send
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
