import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for existing token and validate it
        const token = localStorage.getItem('authToken');
        if (token) {
            axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/auth/validateToken`, { token })
                .then(res => {
                    setUser(res.data.user);
                })
                .catch(err => {
                    console.error(err);
                    localStorage.removeItem('authToken');
                })
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, []);

    const login = async (email, password) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/auth/login`, { email, password });
            localStorage.setItem('authToken', response.data.token);
            setUser(response.data.user);
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
