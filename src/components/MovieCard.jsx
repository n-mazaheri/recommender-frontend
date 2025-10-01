// src/components/MovieCard.js
import React from 'react';

const MovieCard = ({ movie }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown';
    return new Date(dateString).getFullYear();
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
            {movie.title}
          </h3>
          <div className="flex items-center space-x-2 ml-4">
            <span className="bg-primary-500 text-white px-2 py-1 rounded text-sm font-medium">
              {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <span className="font-medium">Release:</span>
            <span className="ml-2">{formatDate(movie.release_date)}</span>
          </div>
          
          {movie.director && (
            <div className="flex items-center text-sm text-gray-600">
              <span className="font-medium">Director:</span>
              <span className="ml-2">{movie.director}</span>
            </div>
          )}
          
          {movie.genres && (
            <div className="flex items-start text-sm text-gray-600">
              <span className="font-medium shrink-0">Genres:</span>
              <span className="ml-2">{movie.genres}</span>
            </div>
          )}
        </div>

        {movie.cast && (
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-1">Cast:</p>
            <p className="text-sm text-gray-600 line-clamp-2">{movie.cast}</p>
          </div>
        )}

        {movie.overview && (
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-1">Overview:</p>
            <p className="text-sm text-gray-600 line-clamp-3">{movie.overview}</p>
          </div>
        )}

        {movie.explanation && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm font-medium text-blue-800 mb-1">
              🤖 Why this matches your request:
            </p>
            <p className="text-sm text-blue-700">{movie.explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;