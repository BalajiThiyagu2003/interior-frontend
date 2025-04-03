import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Card, Button, Modal, Carousel } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../common/loader";
import UserContext from "../usercontext/usercontext";
import "../login/login.css";


const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectImages, setProjectImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/categories", {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      }
    }).then((response) => {
      setCategories(response.data);
      setLoading(false);
    }).catch(error => {
      console.error("Error fetching categories:", error);
      setLoading(false);
    });;
  }, []);

  useEffect(() => {
    const url = selectedCategoryId
      ? `http://localhost:8080/projects/category/${selectedCategoryId}`
      : "http://localhost:8080/projects";

    axios.get(url, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      }
    }).then((response) => {
      setProjects(response.data);
    });
  }, [selectedCategoryId]);

  useEffect(() => {
    if (selectedProject) {
      axios.get(`http://localhost:8080/project-images/${selectedProject.id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      })
        .then((response) => {
          setProjectImages(response.data);
        })
        .catch(() => {
          setProjectImages([]);
        });
    }
  }, [selectedProject]);

  console.log(categories)

  if (loading) return <Loader />;

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
        {user && user.isAdmin && <div className="text-center mb-4 ">
          <Button variant="success" onClick={() => navigate("/add-project")}>
            Add Project
          </Button>
        </div>}


        <Row>
          {projects.map((project) => (
            <Col key={project.id} md={4} className="mt-4 mb-4 d-flex">
              <Card className="card h-100 shadow-lg d-flex flex-column border-0">
                <Card.Img
                  variant="top"
                  src={project.imageUrl}
                  alt={project.name}
                  style={{ height: "250px", objectFit: "cover", cursor: "pointer" }}
                  onClick={() => setSelectedProject(project)}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="text-center">{project.name}</Card.Title>
                  <Card.Text className="text-muted text-center">{project.description}</Card.Text>
                
                  {user && !user.isAdmin &&  
                  <Button variant="success" className="mt-2" onClick={() => {
                    navigate("/contact");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}>
                    Book Now
                  </Button>
}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {selectedProject && (
          <Modal show={true} onHide={() => setSelectedProject(null)} size="lg" centered>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {projectImages.length > 0 ? (
                <Carousel>
                  {projectImages.map((projectImage, index) => (
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-100"
                        src={projectImage.imageUrl}
                        alt={`Slide ${index + 1}`}
                        style={{ maxHeight: "500px", objectFit: "cover" }}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              ) : (
                <p className="text-center">No images available</p>
              )}
              <p className="mt-3">{selectedProject.description}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary"  className="mt-1" onClick={() => setSelectedProject(null)}>Close</Button>
              <Button variant="success" className="mt-1" onClick={() => {
                navigate("/contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}>
                Book Now
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </Container>
    </section>
  );
};

export default Projects;
