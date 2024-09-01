import { create } from 'zustand';

const useRecipeStore = create((set) => ({
    recipes: [],
    searchTerm: '',
    filteredRecipes:[],
    favorites:[],
    recommendations:[],

    // Action to set the search term
    setSearchTerm: (term) => set((state) => {
        state.searchTerm = term;
        state.filterRecipes();  // Automatically filter recipes whenever the search term is updated
    }),

    // Action to filter recipes based on the search term
    filterRecipes: () => set((state) => ({
        filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
    })),

    // Existing actions
    addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
    deleteRecipe: (id) => set((state) => ({
        recipes: state.recipes.filter((recipe) => recipe.id !== id),
        filteredRecipes: state.filteredRecipes.filter((recipe) => recipe.id !== id),
    })),
    updateRecipe: (updatedRecipe) => set((state) => ({
        recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        ),
        filteredRecipes: state.filteredRecipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        ),
    })),

    // Action to add a recipe to favorites
    addFavorite: (recipeId) => set((state) => ({
        favorites: [...state.favorites, recipeId],
    })),

    // Action to remove a recipe from favorites
    removeFavorite: (recipeId) => set((state) => ({
        favorites: state.favorites.filter(id => id !== recipeId),
    })),

    // Action to generate recommendations
    generateRecommendations: () => set((state) => {
        // Mock recommendation logic based on favorites
        const recommended = state.recipes.filter(recipe =>
        !state.favorites.includes(recipe.id) && Math.random() > 0.5
        );
        return { recommendations: recommended };
    }),

    // Initialize or update recipes and favorites
    setRecipes: (recipes) => set({ recipes }),

    setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),

    addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
    deleteRecipe: (id) => set((state) => ({ recipes: state.recipes.filter(recipe => recipe.id !== id) })),
    updateRecipe: (updatedRecipe) => set((state) => ({
        recipes: state.recipes.map(recipe =>
            recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        ),
    })),    
    setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
