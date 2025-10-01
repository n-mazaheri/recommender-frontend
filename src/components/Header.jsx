// src/components/Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MR</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                MovieRecommender
              </span>
            </Link>
          </div>
          
          <nav className="flex space-x-8">
            <Link
              to="/"
              className={`${
                location.pathname === '/'
                  ? 'text-primary-500 border-primary-500'
                  : 'text-gray-500 hover:text-gray-700 border-transparent'
              } border-b-2 px-1 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Home
            </Link>
            <Link
              to="/recommend"
              className={`${
                location.pathname === '/recommend'
                  ? 'text-primary-500 border-primary-500'
                  : 'text-gray-500 hover:text-gray-700 border-transparent'
              } border-b-2 px-1 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Get Recommendations
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;