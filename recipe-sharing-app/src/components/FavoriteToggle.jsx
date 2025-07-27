import { useRecipeStore } from '../store/recipeStore';

const FavoriteToggle = ({ recipeId }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  const toggleFavorite = () => {
    isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId);
  };

  return (
    <button onClick={toggleFavorite} className="text-sm text-blue-500">
      {isFavorite ? '★ Unfavorite' : '☆ Favorite'}
    </button>
  );
};

export default FavoriteToggle;
