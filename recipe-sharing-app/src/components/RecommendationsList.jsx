import { useEffect } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div className="p-4 mt-6">
      <h2 className="text-xl font-bold mb-3">Recommended Recipes</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations at this time.</p>
      ) : (
        <ul>
          {recommendations.map((recipe) => (
            <li key={recipe.id} className="mb-2">
              <h3 className="font-semibold">{recipe.title}</h3>
              <p>{recipe.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecommendationsList;
