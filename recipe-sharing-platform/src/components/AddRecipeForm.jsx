import React, { useState } from 'react';

function AddRecipeForm() {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [errors, setErrors] = useState({}); // State to hold validation errors

    // Validation function
    const validate = () => {
        const newErrors = {};
        
        if (!title.trim()) {
        newErrors.title = 'Recipe title is required';
        }
        if (!ingredients.trim()) {
        newErrors.ingredients = 'Ingredients are required';
        } else {
        const ingredientsList = ingredients.split(',').map(item => item.trim());
        if (ingredientsList.length < 2) {
            newErrors.ingredients = 'Please provide at least two ingredients';
        }
        }
        if (!steps.trim()) {
        newErrors.steps = 'Preparation steps are required';
        }
        return newErrors;
    };

    // Form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const validationErrors = validate(); // Validate form fields
        if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors); // If there are validation errors, set them
        return;
        }

        // If no errors, submit the form data
        console.log({
        title,
        ingredients: ingredients.split(',').map(item => item.trim()),
        steps,
        });

        // Clear the form fields and errors after successful submission
        setTitle('');
        setIngredients('');
        setSteps('');
        setErrors({});
    };

    return (
        <div className="max-w-lg mx-auto my-8 p-8 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Add a New Recipe</h1>

        <form onSubmit={handleSubmit}>
            <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="title">
                Recipe Title
            </label>
            <input
                type="text"
                id="title"
                className={`w-full p-2 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter the recipe title"
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
            </div>

            <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="ingredients">
                Ingredients (comma separated)
            </label>
            <textarea
                id="ingredients"
                className={`w-full p-2 border ${errors.ingredients ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="Enter ingredients separated by commas"
                rows="3"
            />
            {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
            </div>

            <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="steps">
                Preparation Steps
            </label>
            <textarea
                id="steps"
                className={`w-full p-2 border ${errors.steps ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                value={steps}
                onChange={(e) => setSteps(e.target.value)}
                placeholder="Enter the preparation steps"
                rows="5"
            />
            {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
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
