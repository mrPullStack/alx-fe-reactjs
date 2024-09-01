import React, { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const validate = () => {
        let newErrors = {};
        if (!username) newErrors.username = 'Username is required';
        if (!email) newErrors.email = 'Email is required';
        if (!password) newErrors.password = 'Password is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
        // Handle form submission
        console.log('Form data:', { username, email, password });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">Username:</label>
            <input
            type="text"
            id="username"
            name="username"
            value={username} // Correctly using value prop
            onChange={handleChangeUsername}
            />
            {errors.username && <p>{errors.username}</p>}
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input
            type="email"
            id="email"
            name="email"
            value={email} // Correctly using value prop
            onChange={handleChangeEmail}
            />
            {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input
            type="password"
            id="password"
            name="password"
            value={password} // Correctly using value prop
            onChange={handleChangePassword}
            />
            {errors.password && <p>{errors.password}</p>}
        </div>
        <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
