import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecipeList from './components/RecipeList'; 

const App = () => (
  <Router>
    <nav className="p-4 bg-gray-100 mb-4 flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/add">Add Recipe</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/recipes">All Recipes</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddRecipeForm />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
      <Route path="/favorites" element={<FavoritesList />} />
      <Route path="/recipes" element={<RecipeList />} />
    </Routes>
  </Router>
);

export default App;


