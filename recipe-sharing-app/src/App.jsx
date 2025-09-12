import React from 'react'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import SearchBar from './components/SearchBar'

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

      
      <SearchBar />

      
      <AddRecipeForm />

    
      <RecipeList />
    </div>
  )
}
