import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const designers = [
  
  {
    id: 1,
    name: "LDI Design Studio",
    location: "Dallas, Texas",
    description:
      "LDI Design Studio has a wonderful minimal aesthetic to their About page.",
    notableFeatures:
      "Organized into two sections: 'Meet the Owner' and a short autobiography with a photograph.",
    image: "/public/images/img14.jpg",
  },
  {
    id: 2,
    name: "Brian Brown Studio",
    location: "",
    description:
      "Brian Brown Studio's About page is beautifully unique with artistic layout and color blocks.",
    notableFeatures:
      "Team photos taken in the same place, maintaining a cohesive brand aesthetic.",
    image: "/public/images/img16.jpg",
  },
  {
    id: 3,
    name: "Kelly and Co. Design",
    location: "",
    description:
      "Kelly and Co. Design’s About page uses a beautifully filmed video to showcase their work.",
    notableFeatures:
      "Includes a short write-up and four tasteful photographs that visually describe the firm.",
    image: "/public/images/img15.jpg",
  },
];

const About = () => {
  return (
    <section id="about" className="py-5 about-section">
      <Container>
        <h2 className="text-center about-title">About Us</h2>
        <Row className="align-items-center">
          <Col md={6} className="about-image-container">
            <Image src={'/images/about.jpg'} alt="About Us" fluid className="about-image" />
          </Col>
          <Col md={6}>
            <h3 className="about-heading">Transforming Spaces, Elevating Lifestyles</h3>
            <p className="about-text">
              At Ktb, we believe that interior design is more than great functionality and beautiful aesthetics. We aim to make your home interiors a reflection of your personality. Your home should be something that you and your family take pride in and love to spend time in. Our efficient, customized home interior designs incorporate your needs in every nook of your home, so your space meets your every requirement. Our dedicated home interior designers work with you tirelessly to tie your style with their design expertise, creating the perfect interior design plan. They will also ensure that the plan is executed using the materials of the highest standards. In addition to great interior design ideas, you can expect our unwavering support and service for years to come because all our products come with up to 10 year warranty. Think we are the right fit for your journey to your new home? Get a free estimate or a book a free consultation with our interior design team for beautiful home interiors. We offer interior design ideas for living room, bedroom and kitchen. We specialize in complete modular kitchens, stunning wardrobe designs, timeless TV unit designs, and space-saving furniture among other. What’s more, we guarantee beautiful interiors delivered in 45 days or we pay you rent.
            </p>
            <p className="about-text">
            Whether it's a luxurious home, a modern office, or a commercial space, we blend creativity with practicality to bring your vision to life. From concept to completion, we ensure seamless execution, high-quality materials, and impeccable craftsmanship.
            </p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <h2 className="text-center mb-4">Top Interior Designer About Pages</h2>
        {designers.map((designer, index) => (
          <Row key={designer.id} className="mb-4 align-items-center">
            {index % 2 === 0 ? (
              <>
                <Col md={6}>
                  <Image src={designer.image} alt={designer.name} fluid className="w-100" />
                </Col>
                <Col md={6}>
                  <Card.Body>
                    <Card.Title>{designer.name}</Card.Title>
                    <Card.Text>{designer.description}</Card.Text>
                    <p><strong>Notable Features: </strong>{designer.notableFeatures}</p>
                  </Card.Body>
                </Col>
              </>
            ) : (
              <>
                <Col md={6}>
                  <Card.Body>
                    <Card.Title>{designer.name}</Card.Title>
                    <Card.Text>{designer.description}</Card.Text>
                    <p><strong>Notable Features: </strong>{designer.notableFeatures}</p>
                  </Card.Body>
                </Col>
                <Col md={6}>
                  <Image src={designer.image} alt={designer.name} fluid className="w-100" />
                </Col>
              </>
            )}
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default About;
