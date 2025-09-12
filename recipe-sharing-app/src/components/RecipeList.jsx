
import { useRecipeStore } from './recipeStore'

export default function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes)
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes)
  const searchTerm = useRecipeStore((state) => state.searchTerm)

  const displayRecipes = filteredRecipes.length ? filteredRecipes: recipes

  return (
    <div>
      {displayRecipes.map((r) => (
        <div
          key={r.id}
          style={{
            border: '1px solid #ddd',
            padding: '12px',
            marginBottom: '10px',
            borderRadius: '6px',
          }}
        >
          <h3>{r.title}</h3>
          <p>{r.description}</p>
        </div>
      ))}
    </div>
  )
}
