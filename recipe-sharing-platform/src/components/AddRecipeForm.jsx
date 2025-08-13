import { useState } from "react";

export default function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};

    if (!title.trim()) formErrors.title = "Recipe title is required.";
    if (!ingredients.trim()) {
      formErrors.ingredients = "Ingredients are required.";
    } else if (ingredients.split(",").length < 2) {
      formErrors.ingredients = "Include at least two ingredients (comma-separated).";
    }
    if (!steps.trim()) formErrors.steps = "Preparation steps are required.";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split(",").map(item => item.trim()),
      steps,
    };

    onAddRecipe(newRecipe);

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center mb-4">Add New Recipe</h2>

      {/* Title Input */}
      <div>
        <label className="block font-medium">Recipe Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      {/* Ingredients Textarea */}
      <div>
        <label className="block font-medium">Ingredients (comma-separated)</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          rows="3"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        ></textarea>
        {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
      </div>

      {/* Steps Textarea */}
      <div>
        <label className="block font-medium">Preparation Steps</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          rows="4"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        ></textarea>
        {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded-md transition duration-200"
      >
        Submit Recipe
      </button>
    </form>
  );
};
export default AddRecipeForm;