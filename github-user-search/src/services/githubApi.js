import axios from 'axios';

const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchUser = async (username) => {
  const headers = GITHUB_TOKEN
    ? { Authorization: `token ${GITHUB_TOKEN}` }
    : {};

  const response = await axios.get(`https://api.github.com/users/${username}`, {
    headers,
  });
  return response.data;
};
