import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'


export default function DeleteRecipeButton({ recipeId }) {
const deleteRecipe = useRecipeStore((s) => s.deleteRecipe)
const navigate = useNavigate()


const handleDelete = () => {
if (confirm('Delete this recipe?')) {
deleteRecipe(recipeId)
navigate('/')
}
}


return <button onClick={handleDelete} style={{ marginLeft: 12 }}>Delete Recipe</button>
}