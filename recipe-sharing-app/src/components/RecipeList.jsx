import React from 'react'
import { useRecipeStore } from '../store/recipeStore'


export default function RecipeList() {
const recipes = useRecipeStore((state) => state.recipes)


return (
<div>
{recipes.map((recipe) => (
<div key={recipe.id} style={{border: '1px solid #ddd', padding: '12px', marginBottom: '10px', borderRadius: '6px'}}>
<h3>{recipe.title}</h3>
<p>{recipe.description}</p>
</div>
))}
</div>
)
}