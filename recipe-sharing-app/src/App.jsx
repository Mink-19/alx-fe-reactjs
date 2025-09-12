// src/App.jsx
import React from 'react'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'

export default function App() {
  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '40px auto',
        padding: '0 16px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Recipe Sharing App</h1>
      {/* Form to add a recipe */}
      <AddRecipeForm />
      {/* List of recipes */}
      <RecipeList />
    </div>
  )
}
