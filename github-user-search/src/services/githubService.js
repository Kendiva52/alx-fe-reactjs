import axios from 'axios';

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

const githubAPI = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${token}`,
  },
});

// Advanced user search with optional filters
export const searchUsers = async (username, location, minRepos) => {
  let query = '';

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await githubAPI.get(`/search/users?q=${query}`);
  const users = response.data.items;

  // Fetch detailed user data for each
  const detailedUsers = await Promise.all(
    users.map(async (user) => {
      const userDetails = await githubAPI.get(`/users/${user.login}`);
      return userDetails.data;
    })
  );

  return detailedUsers;
};

