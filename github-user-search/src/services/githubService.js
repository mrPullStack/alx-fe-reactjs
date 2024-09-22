import axios from 'axios';

const BASE_URL = 'https://api.github.com';

// Function to fetch user data from GitHub API
export const fetchUserData = async (username) => {
    const { username, location, repos } = queryParams;

    // Construct the query string for advanced search
    let query = `q=${username ? username : ''}`;
    
    if (location) {
        query += `+location:${location}`;
    }
    
    if (repos) {
        query += `+repos:${minRepos}`;
    }

    try {
        const response = await axios.get(`${BASE_URL}/search/users?${query}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};
