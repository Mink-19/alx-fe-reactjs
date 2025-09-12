import { create } from 'zustand'


export const useRecipeStore = create((set) => ({
recipes: [],
searchTerm: '',
filteredRecipes: [],


// Create
addRecipe: (newRecipe) =>
set((state) => ({ recipes: [...state.recipes, newRecipe] })),


// Update
updateRecipe: (id, updates) =>
set((state) => ({
recipes: state.recipes.map((r) => (r.id === id ? { ...r, ...updates } : r)),
})),


// Delete
deleteRecipe: (id) =>
set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),


// Search helpers
setSearchTerm: (term) => set({ searchTerm: term }),
filterRecipes: () =>
set((state) => ({
filteredRecipes: state.recipes.filter((recipe) =>
recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
),
})),
}))