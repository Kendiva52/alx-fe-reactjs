// Favorites array stores recipe IDs marked by the user
import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  // addFavorite and removeFavorite manage this list
  addFavorite: (recipeId) =>
    set((state) => {
      if (!state.favorites.includes(recipeId)) {
        return { favorites: [...state.favorites, recipeId] };
      }
      return {};
    }),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // generateRecommendations picks non-favorited random suggestions (mock logic)
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (recipe) =>
        !favorites.includes(recipe.id) && Math.random() > 0.5 // simple diversity filter
    );
    set({ recommendations: recommended });
  },
}));



