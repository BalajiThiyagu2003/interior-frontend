import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Loader from "../common/loader";

const UserContext = createContext(); 

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("authToken");
            if (token) {
                try {
                    const response = await axios.get("http://localhost:8080/auth/me", {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    setUser(response.data); 
                } catch (error) {
                    console.error("Error fetching user:", error);
                    setUser(null);
                }
            }
            setLoading(false);
        };

        fetchUser();
    }, []);

    if(loading)return <Loader/>

    return (
        <UserContext.Provider value={{ user, loading }}>
            {children}
        </UserContext.Provider>
    );
};
export default UserContext;

