import React, { useState, useEffect } from 'react';

function HomePage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // Fetch mock data from data.json
        fetch('/data.json')
        .then((response) => response.json())
        .then((data) => setRecipes(data))
        .catch((error) => console.error('Error fetching recipes:', error));
    }, []);

    return (
        <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Recipe Sharing Platform</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img src={recipe.image} alt={recipe.title} className="w-full h-32 object-cover rounded-lg mb-4" />
                <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                <p className="text-gray-600">{recipe.summary}</p>
                <button className="mt-4 text-blue-500 hover:text-blue-700">View Recipe</button>
            </div>
            ))}
        </div>
        </div>
    );
}

export default HomePage;
