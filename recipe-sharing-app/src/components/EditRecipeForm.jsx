import React, { useState } from 'react'
import { useRecipeStore } from './recipeStore'


export default function EditRecipeForm({ recipe }) {
const updateRecipe = useRecipeStore((s) => s.updateRecipe)
const [title, setTitle] = useState(recipe.title)
const [ingredients, setIngredients] = useState(recipe.ingredients || '')
const [instructions, setInstructions] = useState(recipe.instructions || recipe.description || '')
const [editing, setEditing] = useState(false)


const handleSubmit = (e) => {
e.preventDefault()
updateRecipe(recipe.id, { title, ingredients, instructions })
setEditing(false)
}


if (!editing) {
return <button onClick={() => setEditing(true)}>Edit Recipe</button>
}


return (
<form onSubmit={handleSubmit} style={{ marginTop: 12, display: 'grid', gap: 8 }}>
<input value={title} onChange={(e) => setTitle(e.target.value)} required />
<textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} rows={2} />
<textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} rows={4} />
<div>
<button type="submit">Save</button>
<button type="button" onClick={() => setEditing(false)} style={{ marginLeft: 8 }}>Cancel</button>
</div>
</form>
)
}