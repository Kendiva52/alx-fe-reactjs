import SearchBar from './SearchBar';
import { useRecipeStore } from '../store/recipeStore';
import FavoriteToggle from './FavoriteToggle';
import RecommendationsList from './RecommendationsList';

const Home = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Recipes</h1>
      <SearchBar />

      {recipes.map((recipe) => (
        <div key={recipe.id} className="border p-4 mb-3 rounded">
          <h2 className="text-lg font-semibold">{recipe.title}</h2>
          <p>{recipe.description}</p>
          <FavoriteToggle recipeId={recipe.id} />
        </div>
      ))}

      <RecommendationsList />
    </div>
  );
};

export default Home;


