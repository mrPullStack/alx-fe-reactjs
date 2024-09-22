import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [username, setUsername] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim() === '') return;
        onSearch(username);
    };

    return (
        <form onSubmit={handleSubmit} className="search-form">
        <input
            type="text"
            placeholder="Search GitHub Users..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
