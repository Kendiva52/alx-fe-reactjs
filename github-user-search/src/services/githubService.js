import axios from "axios";

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

// Function to fetch user data based on username, location, and minimum repositories
export const fetchUserData = async (username, location, minRepos, page = 1) => {
  let query = "";

  // Constructing the query based on provided parameters
  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  if (!query) throw new Error("Please provide at least one search criteria");

  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=10`,
    {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    }
  );

  return response.data; // Return the data from the response
};



