import { useParams } from 'react-router-dom';
import recipes from '../data.json'; // or fetch from an API
import { useEffect, useState } from 'react';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipes.find(r => r.id.toString() === id);
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl shadow mx-auto p-4">
      <img src={recipe.image} alt={recipe.name} className="w-full rounded-lg mb-4" />
      <h1 className="text-3xl font-bold mb-2">{recipe.name}</h1>
      <h2 className="text-xl font-semibold mt-4">Ingredients</h2>
      <ul className="list-disc pl-5">
        {recipe.ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mt-4">Instructions</h2>
      <ol className="list-decimal pl-5">
        {recipe.instructions.map((step, index) => (
          <li key={index} className="mb-2">{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetail;
