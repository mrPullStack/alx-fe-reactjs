import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the API service

const Search = () => {
  const [username, setUsername] = useState(''); // To store the input
  const [userData, setUserData] = useState(null); // To store the fetched data
  const [loading, setLoading] = useState(false); // To manage loading state
  const [error, setError] = useState(false); // To manage error state

  // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (username.trim() === '') return; // Prevent empty submissions

        setLoading(true);
        setError(false);
        setUserData(null); // Clear previous data

        try {
        const data = await fetchUserData(username);
        setUserData(data); // Store the fetched user data
        } catch (error) {
        setError(true); // Set error if request fails
        } finally {
        setLoading(false);
        }
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Search GitHub Users..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>

        {/* Display loading state */}
        {loading && <p>Loading...</p>}

        {/* Display error state */}
        {error && <p>Looks like we cant find the user</p>}

        {/* Display fetched user data */}
        {userData && (
            <div className="user-info">
            <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="100" />
            <h2>{userData.name || userData.login}</h2>
            <p>
                <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                View GitHub Profile
                </a>
            </p>
            </div>
        )}
        </div>
    );
};

export default Search;
