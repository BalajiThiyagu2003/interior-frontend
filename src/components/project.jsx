import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/categories").then((response) => {
      setCategories(response.data);
    });

    
  }, []);

  useEffect(() => {
    const url = selectedCategoryId
      ? `http://localhost:8080/projects/category/${selectedCategoryId}`
      : "http://localhost:8080/projects";

    axios.get(url).then((response) => {
      setProjects(response.data);
    });
  }, [selectedCategoryId]);

  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mt-5 text-primary">Top Projects</h2>

        <div className="text-center mb-4">
          <Button
            variant={!selectedCategoryId ? "dark" : "secondary"}
            className="m-2"
            onClick={() => setSelectedCategoryId(null)}
          >
            Show All
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategoryId === category.id ? "dark" : "primary"}
              className="m-2"
              onClick={() => setSelectedCategoryId(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <Row>
          {projects.map((project) => (
            <Col key={project.id} md={4} className="mt-4 mb-4 d-flex">
              <Card className="h-100 shadow-lg d-flex flex-column border-0">
                <Card.Img
                  variant="top"
                  src={project.imageUrl}
                  alt={project.name}
                  style={{ height: "250px", objectFit: "cover", cursor: "pointer" }}
                  onClick={() => setSelectedImage(project.imageUrl)}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="text-center">{project.name}</Card.Title>
                  <Card.Text className="text-muted text-center">{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {selectedImage && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", zIndex: 1050 }}
            onClick={() => setSelectedImage(null)}
          >
            <div className="position-relative">
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
