import React, { useState } from 'react';

function AddRecipeForm() {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple front-end validation
        if (!title || !ingredients || !steps) {
        setError('All fields are required.');
        return;
        }

        const ingredientsList = ingredients.split(',').map(item => item.trim());
        if (ingredientsList.length < 2) {
        setError('Please provide at least two ingredients.');
        return;
        }

        // Clear error and proceed with form submission logic (e.g., send data to backend or update state)
        setError('');
        console.log({
        title,
        ingredients: ingredientsList,
        steps,
        });

        // Clear form
        setTitle('');
        setIngredients('');
        setSteps('');
    };

    return (
        <div className="max-w-lg mx-auto my-8 p-8 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Add a New Recipe</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="title">
                Recipe Title
            </label>
            <input
                type="text"
                id="title"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter the recipe title"
            />
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="ingredients">
                Ingredients (comma separated)
            </label>
            <textarea
                id="ingredients"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="Enter ingredients separated by commas"
                rows="3"
            />
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="steps">
                Preparation Steps
            </label>
            <textarea
                id="steps"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={steps}
                onChange={(e) => setSteps(e.target.value)}
                placeholder="Enter the preparation steps"
                rows="5"
            />
            </div>
            <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
            Add Recipe
            </button>
        </form>
        </div>
    );
}

export default AddRecipeForm;
