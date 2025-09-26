import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

export default function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // prevent empty or whitespace-only submissions
    const query = username.trim();
    if (!query) return;

    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const data = await fetchUserData(query);
      setUserData(data);
    } catch {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          aria-label="GitHub username"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Searching…' : 'Search'}
        </button>
      </form>

      <div className="search-results">
        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}

        {userData && (
          <div className="user-card">
            <img
              src={userData.avatar_url}
              alt={`${userData.login}'s avatar`}
              width={100}
              height={100}
            />
            <h2>{userData.name || userData.login}</h2>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

