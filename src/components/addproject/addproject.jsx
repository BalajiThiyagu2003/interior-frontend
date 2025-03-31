import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AddProject.css"; 
import { useNavigate } from "react-router-dom";

const AddProject = () => {
    const [project, setProject] = useState({
        name: "",
        description: "",
        categoryId: "",
        imageUrl: "",
        imageUrls: ""
    });
     const [categories, setCategories] = useState([]);
     const navigate = useNavigate();

     useEffect(() => {
         axios.get("http://localhost:8080/categories", {
           headers: {
             'Authorization': `Bearer ${localStorage.getItem('authToken')}`
           }
         }).then((response) => {
           setCategories(response.data);
         });
       }, []);
     

    const handleChange = (e) => {
        setProject({ ...project, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const galleryImagesArray = project.imageUrls
                .split(",")
                .map((url) => url.trim())
                .filter((url) => url !== "");

            const payload = {
                name: project.name,
                description: project.description,
                imageUrl: project.imageUrl,
                categoryId: project.categoryId ? parseInt(project.categoryId) : null,
                imageUrls: galleryImagesArray
            };

            const response = await axios.post(
                "http://localhost:8080/projects/add-project", 
                payload,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("authToken")}`
                    },
                }
            );

            alert("Project added successfully!");
            navigate('/projects')
            console.log(response.data);
        } catch (error) {
            console.error("Error adding project:", error);

            if (error.response) {
                alert(`Failed to add project: ${error.response.data.message || "Server error"}`);
            } else if (error.request) {
                alert("No response from the server. Check backend or network.");
            } else {
                alert("Something went wrong. Try again.");
            }
        }
    };

    return (
        <div className="add-project-container">
            <h2 className="text-center add-project-title p-5">Add New Project</h2>
            <form onSubmit={handleSubmit} className="add-project-form">
                <div>
                    <label className="add-project-label">Project Name</label>
                    <input type="text" name="name" className="form-control add-project-input" onChange={handleChange} required />
                </div>

                <div>
                    <label className="add-project-label">Description</label>
                    <textarea name="description" className="form-control add-project-input" rows="3" onChange={handleChange} required></textarea>
                </div>

                <div>
                    <label className="add-project-label">Category</label>
                    <select name="categoryId" className="form-select add-project-input" onChange={handleChange} required>
                        <option value="">Select</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="add-project-label">Main Image URL</label>
                    <textarea 
                        name="imageUrl" 
                        className="form-control add-project-input" 
                        placeholder="Paste main image URL here..." 
                        rows="2"
                        onChange={handleChange} 
                        required
                    /> 
                </div>

                <div>
                    <label className="add-project-label">Carousel Image URLs (Comma Separated)</label>
                    <textarea 
                        name="imageUrls" 
                        className="form-control add-project-input" 
                        placeholder="Paste multiple image URLs, separated by commas..." 
                        rows="3"
                        onChange={handleChange}
                    />
                </div>

                <div className="submit-container">
                    <button type="submit" className="btn add-project-submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddProject;
