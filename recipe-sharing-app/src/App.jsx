import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import SearchBar from './components/SearchBar'
import RecipeDetails from './components/RecipeDetails'


export default function App() {
return (
<div style={{ maxWidth: '900px', margin: '40px auto', padding: '0 16px' }}>
<header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
<h1>Recipe Sharing App</h1>
<nav>
<Link to="/">Home</Link>
</nav>
</header>


<Routes>
<Route
path="/"
element={(
<>
<SearchBar />
<AddRecipeForm />
<RecipeList />
</>
)}
/>


<Route path="/recipes/:id" element={<RecipeDetails />} />
</Routes>
</div>
)
}