import React from 'react';
import useRecipeStore from '../recipeStore';

const SearchBar = () => {
    const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

    return (
        <input
        type="text"
        placeholder="Search recipes..."
        onChange={(e) => setSearchTerm(e.target.value)}  // Update the search term on input change
        />
    );
};

export default SearchBar;
