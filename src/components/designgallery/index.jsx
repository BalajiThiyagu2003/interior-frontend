import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import Loader from '../common/loader'

const DesignGallery = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8080/categories",{
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('authToken')}`
            }
        })
            .then(response => {
                setCategories(response.data); 
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching categories:", error);
                setError("Failed to load categories.");
                setLoading(false);
            });
    }, []);

    const handleClick = (path) => {
        window.scrollTo(0, 0); 
        navigate(path);
    };

    if (loading) return <Loader/>;
    if (error) return <p className="text-danger">{error}</p>;

    return (
        <div className="container py-5">
            <h2 className="text-start mb-4">Design Gallery</h2>
            <p className="text-start">
                If you’re on the lookout for <strong>simple home interior designs</strong>,
                look no further than HomeLane for <strong>end-to-end interior design</strong> services.
            </p>
            <div className="row">
                {categories.map((category) => (
                    <div className="col-md-4 mb-4" key={category.id}>
                        <div className="card h-100">
                            <img
                                src={category.imageUrl}
                                className="card-img-top"
                                alt={category.name}
                                style={{ height: '300px', width: '100%', objectFit: 'cover', cursor: 'pointer' }}
                                onClick={() => handleClick('/projects')}
                            />
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title text-center">{category.name}</h5>
                                <Button variant="primary" className="mt-2" onClick={() => handleClick('/projects')}>
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

export default DesignGallery;
