import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

// Counter Component
const Counter = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            setCount(prevCount => {
                if (prevCount >= target) {
                    clearInterval(interval);
                    return target;
                }
                return prevCount + Math.ceil(target / 100);
            });
        }, 20);
        return () => clearInterval(interval);
    }, [target]);

    return <h1 className="stats-number">{count}+</h1>;
};

// Home Component (with animated counter)
const Home = () => {
    const statsData = [
        { count: 100, label: "Services" },
        { count: 40, label: "Awards" },
        { count: 234, label: "Clients" },
        { count: 64, label: "Projects" },
    ];

    return (
        <section id="home" className="home-section d-flex align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md={8} className="text-center">
                        <div className="home-text-box">
                            <h1 className="home-title">Home Makers</h1>
                            <h3 className="home-subtitle">Interior Services</h3>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5 text-center">
                    {statsData.map((item, index) => (
                        <Col key={index} md={3} className="stats-box">
                            <Counter target={item.count} />
                            <h5 className="stats-label">{item.label}</h5>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

// Design Gallery Component
const designData = [
    { title: 'Modular Kitchen', image: '/images/img19.jpg', path: '/projects' },
    { title: 'Bedroom', image: '/images/img8.jpg', path: '/projects' },
    { title: 'Living Room', image: '/images/img9.jpg', path: '/projects' },
    { title: 'Bathroom', image: '/images/img10.jpg', path: '/projects' },
    { title: 'Workspace', image: '/images/img12.jpg', path: '/projects' },
    { title: 'Dining Hall', image: '/images/img22.jpg', path: '/projects' }
];

const DesignGallery = () => {
    const navigate = useNavigate();

    const handleClick = (path) => {
        window.scrollTo(0, 0); // Scroll to top
        navigate(path);
    };

    return (
        <div className="container py-5">
            <h2 className="text-start mb-4">Design Gallery</h2>
            <p className="text-start">
                If you’re on the lookout for <strong>simple home interior designs</strong>,
                look no further than HomeLane for <strong>end-to-end interior design</strong> services.
            </p>
            <div className="row">
                {designData.map((item, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card h-100">
                            <img
                                src={item.image}
                                className="card-img-top"
                                alt={item.title}
                                style={{ height: '300px', width: '100%', objectFit: 'cover', cursor: 'pointer' }}
                                onClick={() => handleClick(item.path)}
                            />
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title text-center">{item.title}</h5>
                                <Button variant="primary" className="mt-2" onClick={() => handleClick(item.path)}>
                                    View Projects
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// FAQ Component
const FAQ = () => {
    return (
        <><Row className="my-5 mx-5">
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

                    {/* Vertical Line Between Icons */}
                    {index !== 3 && (
                        <div className="vertical-line"></div>
                    )}
                </Col>
            ))}


        </Row>

            <section id="faq" className="faq-section py-3">
                <Container>
                    <h2 className="text-center mb-3">Frequently Asked Questions (FAQ)</h2>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How do I know what style of interior design suits me?</Accordion.Header>
                            <Accordion.Body>
                                Explore different interior design styles (modern, traditional, bohemian, etc.) through online resources or consult with a designer.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>How much does interior design cost?</Accordion.Header>
                            <Accordion.Body>
                                The cost varies depending on space size, project complexity, and customization level. A designer can help plan within your budget.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>What are the latest interior design trends?</Accordion.Header>
                            <Accordion.Body>
                                Some trending styles include minimalism, biophilic design (bringing nature indoors), earthy tones, sustainable materials, and multifunctional furniture.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>How can I make a small room look bigger?</Accordion.Header>
                            <Accordion.Body>
                                Use light colors, mirrors, multi-functional furniture, and proper lighting to create the illusion of more space.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>What are some budget-friendly interior design tips?</Accordion.Header>
                            <Accordion.Body>
                                Opt for DIY decor, repaint walls for a fresh look, use statement lighting, rearrange furniture, and add affordable decorative elements like plants and artwork.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>What colors work best for different rooms?</Accordion.Header>
                            <Accordion.Body>
                                - **Living Room**: Warm neutrals or earthy tones create a cozy vibe.
                                - **Bedroom**: Soft, calming colors like pastel blues or greens help relaxation.
                                - **Kitchen**: Bright and airy colors like white, yellow, or light gray enhance energy.
                                - **Bathroom**: Crisp whites or cool blues create a fresh, spa-like feel.
                            </Accordion.Body>
                        </Accordion.Item>
                      
                    </Accordion>
                </Container>
            </section>



        </>
    );
};

// Main App Component (renders everything)
const App = () => {
    return (
        <>
            <Home />
            <DesignGallery />
            <FAQ />
        </>
    );
};

export default App;
