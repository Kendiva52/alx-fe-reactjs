import axios from 'axios';

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

const githubAPI = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${token}`,
  },
});

// Fetch basic user data
export const fetchUserData = async (username) => {
  const response = await githubAPI.get(`/users/${username}`);
  return response.data;
};

// Advanced user search with optional filters
export const searchUsers = async (username, location, minRepos) => {
  let query = '';

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await githubAPI.get(`/search/users?q=${query}`);
  const users = response.data.items;

  const detailedUsers = await Promise.all(
    users.map(async (user) => {
      return fetchUserData(user.login); // use the function you exported above
    })
  );

  return detailedUsers;
};


