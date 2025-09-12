import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'
import EditRecipeForm from './EditRecipeForm'
import DeleteRecipeButton from './DeleteRecipeButton'


export default function RecipeDetails() {
const { id } = useParams()
const navigate = useNavigate()
const recipe = useRecipeStore((state) => state.recipes.find((r) => String(r.id) === id))


if (!recipe) return <p>Recipe not found.</p>


return (
<div style={{ maxWidth: 800, margin: '24px auto' }}>
<button onClick={() => navigate(-1)}>← Back</button>
<h1>{recipe.title}</h1>
<p><strong>Ingredients:</strong> {recipe.ingredients || '—'}</p>
<p><strong>Instructions:</strong></p>
<p>{recipe.instructions || recipe.description}</p>


<h3>Actions</h3>
<EditRecipeForm recipe={recipe} />
<DeleteRecipeButton recipeId={recipe.id} />
</div>
)
}