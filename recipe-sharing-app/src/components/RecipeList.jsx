import React from 'react'
import { useRecipeStore } from './recipeStore'

export default function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes)
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes)

  // Decide which list to display
  const displayRecipes =
    filteredRecipes && filteredRecipes.length > 0
      ? filteredRecipes
      : recipes

  return (
    <div>
      {displayRecipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: '1px solid #ddd',
            padding: '12px',
            marginBottom: '10px',
            borderRadius: '6px',
          }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  )
}
