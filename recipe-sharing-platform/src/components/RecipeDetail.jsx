import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        // Fetch the recipe details from data.json based on the ID
        fetch('/data.json')
        .then((response) => response.json())
        .then((data) => {
            const recipeData = data.find((recipe) => recipe.id === parseInt(id));
            setRecipe(recipeData);
        })
        .catch((error) => console.error('Error fetching recipe details:', error));
    }, [id]);

    if (!recipe) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc list-inside mb-6">
            {/* Sample ingredients data */}
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <li>Ingredient 3</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Cooking Instructions</h2>
        <p className="text-gray-600">
            {/* Sample instructions */}
            Step 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Step 2: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
        </p>
        </div>
    );
}

export default RecipeDetail;

