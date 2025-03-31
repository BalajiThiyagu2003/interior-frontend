import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import DesignGallery from '../designgallery/index';
import FAQ from '../faq/faq';



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
