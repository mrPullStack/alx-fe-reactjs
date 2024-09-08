import { useState, useEffect } from 'react';

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Replace this with your actual authentication logic
        const storedToken = localStorage.getItem('token');
        setIsAuthenticated(!!storedToken);
    }, []);

    return isAuthenticated;
};

export default useAuth;