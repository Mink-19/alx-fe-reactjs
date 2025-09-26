import './App.css'

export default function App() {
  return (
    <div className="app-container">
      <header>
        <h1>GitHub User Search</h1>
        <p>Search for GitHub profiles by username</p>
      </header>

      <main>
        {/* Search input and results will go here */}
        {/* Example placeholders: */}
        <section id="search-bar">
          {/* <SearchBar /> */}
        </section>

        <section id="results">
          {/* <UserResults /> */}
        </section>
      </main>

      <footer>
        <small>Powered by the GitHub API</small>
      </footer>
    </div>
  );
}

