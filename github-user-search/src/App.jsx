// src/App.jsx
import './index.css';        // Tailwind-enabled styles
import Search from './components/Search';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 text-center shadow-md">
        <h1 className="text-3xl font-bold">GitHub User Search</h1>
        <p className="mt-2 text-lg">Search for GitHub profiles by username</p>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <section id="search-bar" className="mb-8">
          <Search />
        </section>

        <section id="results">
          {/* If Search handles displaying results internally, nothing else is needed here */}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-100 text-center py-4">
        <small>Powered by the GitHub API</small>
      </footer>
    </div>
  );
}

