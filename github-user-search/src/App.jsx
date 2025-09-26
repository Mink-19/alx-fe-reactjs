import './App.css';
import Search from './components/Search';

export default function App() {
  return (
    <div className="app-container">
      <header>
        <h1>GitHub User Search</h1>
        <p>Search for GitHub profiles by username</p>
      </header>

      <main>
        <section id="search-bar">
          <Search />
        </section>

        <section id="results">
          {/* If Search handles results internally, you may not need extra code here */}
        </section>
      </main>

      <footer>
        <small>Powered by the GitHub API</small>
      </footer>
    </div>
  );
}

