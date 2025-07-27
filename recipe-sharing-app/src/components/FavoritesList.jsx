import { useRecipeStore } from '../store/recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);

  const favoriteRecipes = favorites
    .map((id) => recipes.find((recipe) => recipe.id === id))
    .filter(Boolean);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorites added.</p>
      ) : (
        <ul>
          {favoriteRecipes.map((recipe) => (
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

export default FavoritesList;
