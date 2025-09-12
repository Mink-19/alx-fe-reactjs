import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

export default function RecipeList() {
  const filtered = useRecipeStore((s) => s.filteredRecipes);
  const all = useRecipeStore((s) => s.recipes);
  const recipes = filtered.length ? filtered : all;

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ddd', padding: 12, marginBottom: 10 }}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
}

