import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Services = () => {
  return (
    <section id="service" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mt-5 text-primary">Our Services</h2>
        <Row className="mt-5">
          {[
            { icon: "fa-palette", text: "Creative Interior Designs", color: "#ff5733" },
            { icon: "fa-couch", text: "Furniture Planning", color: "#33b5e5" },
            { icon: "fa-tools", text: "Structural Integrity", color: "#ffbb33" },
            { icon: "fa-house-user", text: "User Experience Focus", color: "#2ecc71" },
          ].map((service, index) => (
            <Col key={index} md={3} className="text-center text-secondary position-relative">
              <i className={`fas ${service.icon} fa-2x mb-2`} style={{ color: service.color }}></i>
              <p className="mt-2">{service.text}</p>
              
              {index !== 3 && (
                <div className="vertical-line"></div>
              )}
            </Col>
          ))}
        </Row>

        <img
          src="./images/img13.jpeg" 
          alt="Our Services" 
          className="w-100 mt-5" 
          style={{ maxHeight: "500px", objectFit: "cover" }} 
        />


        <Row className="my-5  mt-5">
          {[
            { icon: "fa-shield-alt", title: "Flat 10-year warranty", description: "Choose interiors designed with superior quality materials, leaving no room for defects.", color: "#ff5733" },
            { icon: "fa-calendar-check", title: "45-day delivery", description: "Get beautiful interiors for your new home in just 45 days. That’s our delivery guarantee.", color: "#33b5e5" },
            { icon: "fa-users-cog", title: "20+ design experts", description: "Explore design ideas and co-create your dream home with our experienced designers.", color: "#ffbb33" },
            { icon: "fa-tools", title: "Post-installation service", description: "Complete your design journey and get unwavering support from our dedicated care team.", color: "#2ecc71" },
          ].map((service, index) => (
            <Col key={index} md={3} className="text-center text-secondary position-relative">
              <i className={`fas ${service.icon} fa-2x mb-2`} style={{ color: service.color }}></i>
              <h5 className="mt-2">{service.title}</h5>
              <p>{service.description}</p>
              
              {index !== 3 && (
                <div className="vertical-line"></div>
              )}
            </Col>
          ))}
        </Row>

      
      </Container>

      <style>
        {`
          .vertical-line {
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            height: 60px;
            width: 2px;
            background-color: #ddd;
          }

          @media (max-width: 767px) {
            .vertical-line {
              display: none; /* Hide vertical line on mobile */
            }
          }
        `}
      </style>
    </section>
  );
};

export default Services;
