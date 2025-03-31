import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import { Table, Container, Alert } from "react-bootstrap";
import UserContext from "../usercontext/usercontext";
import Loader from "../common/loader";

const ContactTable = () => {
    const { user } = useContext(UserContext);
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            if (user.isAdmin) {
                fetchContacts();
            }
            setLoading(false);
        }
    }, [user]);

    const fetchContacts = async () => {
        try {
            const response = await axios.get("http://localhost:8080/contacts", {
                headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
            });
            setContacts(response.data);
        } catch (error) {
            console.error("Error fetching contacts:", error);
        }
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <Container className="mt-5">
            {user && user.isAdmin ? (
                <>
                    <h2 className="text-center text-white bg-dark p-4 rounded shadow">Contact List</h2>
                    <div className="table-responsive shadow-lg p-3 rounded bg-light">
                        <Table striped bordered hover>
                            <thead className="table-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Message</th>
                                    <th>Submitted At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.length > 0 ? (
                                    contacts.map((contact) => (
                                        <tr key={contact.id}>
                                            <td>{contact.id}</td>
                                            <td>{contact.fullName}</td>
                                            <td>{contact.email}</td>
                                            <td>{contact.message}</td>
                                            <td>{new Date(contact.submittedAt).toLocaleString()}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-center text-muted">
                                            No contacts found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                    
                </>
            ) : (
                <Alert variant="danger" className="text-center">
                    <h4>You are not an admin</h4>
                    <p>Access denied. You do not have permission to view this page.</p>
                </Alert>
            )}
        </Container>
    );
};

export default ContactTable;
