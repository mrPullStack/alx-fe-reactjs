import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users/';


// Function to fetch user data from GitHub API
export const fetchUserData = async (username) => {
    let query = username ? `user:${username}` : '';
    
    if (location) {
        query += `+location:${location}`;
    }
    
    if (minRepos) {
        query += `+repos:${minRepos}`;
    }


    try {
        const response = await axios.get(`${GITHUB_API_URL}${username}`);
        return response.data; // Return user data
    } catch (error) {
        console.error('Error fetching GitHub users:', error);
        throw error; // Handle errors
    }

};
