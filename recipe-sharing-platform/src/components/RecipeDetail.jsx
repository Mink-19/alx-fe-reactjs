import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import recipesData from '../data.json';

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-20">Recipe not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
      <Link
        to="/"
        className="inline-block mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        ← Back to Home
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700 mb-6">{recipe.summary}</p>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-700">
              {recipe.ingredients ? (
                recipe.ingredients.map((ing, index) => <li key={index}>{ing}</li>)
              ) : (
                <li>No ingredients listed.</li>
              )}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-1">
              {recipe.instructions ? (
                recipe.instructions.map((step, index) => <li key={index}>{step}</li>)
              ) : (
                <li>No instructions available.</li>
              )}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
