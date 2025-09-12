import React, { useEffect } from 'react'
import { useRecipeStore } from './recipeStore'


export default function SearchBar() {
const searchTerm = useRecipeStore((state) => state.searchTerm)
const setSearchTerm = useRecipeStore((state) => state.setSearchTerm)
const filterRecipes = useRecipeStore((state) => state.filterRecipes)


// run filter whenever searchTerm changes
useEffect(() => {
filterRecipes()
}, [searchTerm, filterRecipes])


return (
<input
type="text"
placeholder="Search recipes by title..."
value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)}
style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', marginBottom: '20px' }}
/>
)
}