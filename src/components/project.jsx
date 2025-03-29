import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import img2 from "../../public/images/img2.jpg";
import img3 from "../../public/images/img3.jpg";
import img4 from "../../public/images/img4.jpg";
import img5 from "../../public/images/img5.jpg";
import img6 from "../../public/images/img6.jpg";
import img9 from "../../public/images/img9.jpg";
import img10 from "../../public/images/img10.jpg";
import img17 from "../../public/images/img17.jpg";
import img18 from "../../public/images/img18.jpg";
import img19 from "../../public/images/img19.jpg";
import img20 from "../../public/images/img20.jpg";
import img21 from "../../public/images/img21.jpg";
import img22 from "../../public/images/img22.jpg";
import img23 from "../../public/images/img23.jpg";
import img24 from "../../public/images/img24.jpg";
import bed1 from "../../public/images/bed1.jpg";
import bed2 from "../../public/images/bed2.jpg";
import bed3 from "../../public/images/bed3.jpg";

const projectData = {
  LivingRoom: [
    { image: img4, title: "Modern Living Room", description: "Sleek and modern living room design with neutral tones." },
    { image: img9, title: "Cozy Living Room", description: "A warm and cozy living space with comfortable seating." },
    { image: img18, title: "Classic Living Room", description: "A warm and cozy living space with comfortable seating." }
  ],
  Bedroom: [
    { image: bed2, title: "Cozy Bedroom", description: "Warm and inviting bedroom with soft lighting and textures." },
    { image: bed1, title: "Modern Bedroom", description: "Stylish and contemporary bedroom with elegant decor." },
    { image: bed3, title: "Luxury Bedroom", description: "Stylish and contemporary bedroom with elegant decor." }
  ],
  Kitchen: [
    { image: img2, title: "Minimalist Kitchen", description: "Clean lines and smart storage solutions for efficiency." },
    { image: img19, title: "Spacious Kitchen", description: "Large kitchen with an island and modern appliances." },
    { image: img20, title: "Super Kitchen", description: "Large kitchen with an island and modern appliances." }
  ],
  Bathroom: [
    { image: img6, title: "Luxury Bathroom", description: "Spa-like bathroom with stylish tiles and spacious bathtub." },
    { image: img10, title: "Modern Bathroom", description: "Minimalist bathroom with sleek fixtures and lighting." },
    { image: img17, title: "Stylish Bathroom", description: "Minimalist bathroom with sleek fixtures and lighting." }
  ],
  DiningRoom: [
    { image: img3, title: "Classic Dining Room", description: "Traditional dining space with elegant woodwork." },
    { image: img21, title: "Contemporary Dining", description: "Modern dining area with stylish seating." },
    { image: img22, title: "Elegant Dining", description: "Modern dining area with stylish seating." }
  ],
  Workspace: [
    { image: img5, title: "Elegant Office Space", description: "Workspace designed for productivity with natural lighting." },
    { image: img23, title: "Creative Workspace", description: "Inspiring office with artistic decor and ergonomic furniture." },
    { image: img24, title: "Innovative Workspace", description: "Inspiring office with artistic decor and ergonomic furniture." }
  ],
};

const Projects = () => {
  const [selectedRoom, setSelectedRoom] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFilter = (room) => {
    setSelectedRoom(room);
  };

  const filteredProjects = selectedRoom === "All" ? Object.values(projectData).flat() : projectData[selectedRoom];

  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mt-5 text-primary">Top Projects</h2>
        <div className="text-center mb-4">
          {Object.keys(projectData).map((room) => (
            <Button key={room} variant="primary" className="m-2" onClick={() => handleFilter(room)}>
              {room}
            </Button>
          ))}
          <Button variant="secondary" className="m-2" onClick={() => handleFilter("All")}>
            Show All
          </Button>
        </div>
        <Row>
          {filteredProjects.map((project, index) => (
            <Col key={index} md={4} className="mt-5 mb-4 d-flex">
              <Card className="h-100 shadow-lg d-flex flex-column border-0">
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  style={{ height: "250px", objectFit: "cover", cursor: "pointer", border: "none" }}
                  onClick={() => setSelectedImage(project.image)}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="text-center">{project.title}</Card.Title>
                  <Card.Text className="text-muted text-center">{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Image Preview Modal (Perfectly Centered Image with Close Button) */}
        {selectedImage && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", zIndex: 1050 }}
            onClick={() => setSelectedImage(null)} // Close when clicking outside image
          >
            <div className="position-relative">
              {/* Close Button (❌) in Image's Top-Right Corner */}
              <Button
                variant="light"
                className="position-absolute"
                style={{
                  top: "-10px",
                  right: "-10px",
                  zIndex: 10,
                  backgroundColor: "white",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                }}
                onClick={() => setSelectedImage(null)}
              >
                ❌
              </Button>
              {/* Display Image (Centered in Window) */}
              <img
                src={selectedImage}
                alt="Selected"
                className="img-fluid"
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "90vw",
                  maxHeight: "90vh",
                  display: "block",
                  border: "none",
                  // boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
                }}
              />
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Projects;
