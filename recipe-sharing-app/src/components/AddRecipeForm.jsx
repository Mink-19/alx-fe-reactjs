import React, { useState } from 'react'
import { useRecipeStore } from '../store/recipeStore'


export default function AddRecipeForm() {
const addRecipe = useRecipeStore((state) => state.addRecipe)
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')


const handleSubmit = (event) => {
event.preventDefault()
addRecipe({ id: Date.now(), title, description })
setTitle('')
setDescription('')
}


return (
<form onSubmit={handleSubmit} style={{display:'grid', gap:'8px', marginBottom:'20px'}}>
<input
type="text"
value={title}
onChange={(e) => setTitle(e.target.value)}
placeholder="Title"
required
/>
<textarea
value={description}
onChange={(e) => setDescription(e.target.value)}
placeholder="Description"
required
/>
<button type="submit">Add Recipe</button>
</form>
)
}