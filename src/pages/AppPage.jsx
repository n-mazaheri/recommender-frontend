// src/pages/AppPage.js
import React, { useState } from 'react';
import MovieCard from '../components/MovieCard';
import API from '../api';

const AppPage = () => {
  const [query, setQuery] = useState('');
  const [k, setK] = useState(1);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError('');
    setMovies([]);

    try {
      const response = await API.post('/recommend', {
        query: query,
        k: parseInt(k)
      });

      // Updated to match your actual response format: { recommendations: [...] }
      setMovies(response.data.recommendations || []);
      
    } catch (err) {
      console.error('API call failed:', err);
      
      if (err.response) {
        setError(`Server error: ${err.response.status} - ${err.response.data?.detail || 'Unknown error'}`);
      } else if (err.request) {
        setError('Network error: Unable to connect to the server. Please check your connection.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const exampleQueries = [
    "I want romantic comedies from the 90s",
    "Action movies with car chases",
    "French films about love",
    "Sci-fi movies with artificial intelligence",
    "Historical dramas set in ancient Rome"
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Movie Recommendation Engine
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Describe the type of movies you're looking for in any language. 
            Our AI will find the perfect matches and explain why they're recommended.
          </p>
        </div>

        {/* Input Form */}
        <div className="max-w-4xl mx-auto mb-12">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="space-y-6">
              <div>
                <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-2">
                  What kind of movies are you looking for?
                </label>
                <textarea
                  id="query"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g., I'm looking for thrilling mystery movies with plot twists, or any other language..."
                  className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="k" className="block text-sm font-medium text-gray-700 mb-2">
                  Number of recommendations (1-20)
                </label>
                <input
                  type="number"
                  id="k"
                  value={k}
                  onChange={(e) => {
                    const value = Math.min(20, Math.max(1, parseInt(e.target.value) || 1));
                    setK(value);
                  }}
                  min="1"
                  max="20"
                  className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={loading || !query.trim()}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed py-3 text-lg"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Finding Recommendations...
                  </div>
                ) : (
                  'Find Movies'
                )}
              </button>
            </div>
          </form>

          {/* Example Queries */}
          <div className="mt-6">
            <p className="text-sm text-gray-600 mb-3">Try these examples:</p>
            <div className="flex flex-wrap gap-2">
              {exampleQueries.map((example, index) => (
                <button
                  key={index}
                  onClick={() => setQuery(example)}
                  className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors duration-200"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center">
                <div className="text-red-400 mr-2">⚠️</div>
                <div>
                  <p className="text-red-800 font-medium">Error getting recommendations</p>
                  <p className="text-red-700 text-sm mt-1">{error}</p>
                </div>
              </div>
              <button
                onClick={() => setError('')}
                className="mt-2 text-red-700 hover:text-red-800 text-sm font-medium"
              >
                Dismiss
              </button>
            </div>
          </div>
        )}

        {/* Results */}
        {movies.length > 0 && (
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Recommended Movies ({movies.length})
              </h2>
              <button
                onClick={() => setMovies([])}
                className="text-gray-500 hover:text-gray-700 text-sm font-medium"
              >
                Clear Results
              </button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {movies.map((movie, index) => (
                <MovieCard
                  key={index}
                  movie={movie}
                />
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && movies.length === 0 && !error && (
          <div className="max-w-2xl mx-auto text-center py-12">
            <div className="text-6xl mb-4">🎬</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              No recommendations yet
            </h3>
            <p className="text-gray-600">
              Describe the movies you're looking for above and click "Find Movies" to get personalized recommendations with AI explanations.
            </p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="max-w-2xl mx-auto text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Finding your perfect movies...
            </h3>
            <p className="text-gray-600">
              Searching through 5000+ movies to find the best matches for you.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppPage;