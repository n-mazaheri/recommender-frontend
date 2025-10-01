// src/pages/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const features = [
    {
      icon: '🌍',
      title: 'Multilingual Support',
      description: 'Ask for movie recommendations in any language. Our system automatically detects and translates your queries.'
    },
    {
      icon: '🎬',
      title: 'Smart Recommendations',
      description: 'Get personalized movie suggestions based on your preferences using advanced AI and embeddings.'
    },
    {
      icon: '🤖',
      title: 'AI-Powered Explanations',
      description: 'Understand why each movie was recommended with detailed AI-generated explanations.'
    },
    {
      icon: '⚡',
      title: 'Fast & Efficient',
      description: 'Built with optimized models that run efficiently on CPU for quick responses.'
    }
  ];

  const techStack = [
    'React.js Frontend',
    'FastAPI Backend',
    'LangChain & LangGraph',
    'FAISS Vector Database',
    'Sentence Transformers',
    'OpenRouter LLM'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Discover Your Next
              <span className="block text-white-300">Favorite Movie</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
              An intelligent multilingual movie recommender system powered by AI. 
              Ask for movies in any language and get personalized recommendations with explanations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/recommend"
                className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
              >
                Try It Now
              </Link>
              <a
                href="https://github.com/n-mazaheri/recommender"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our system uses a sophisticated pipeline to deliver the best movie recommendations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Recommendation Process
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Language Detection & Translation',
                  description: 'Your query is automatically detected and translated to English for processing'
                },
                {
                  step: '2',
                  title: 'Semantic Search',
                  description: 'We find the most similar movies using FAISS vector similarity search'
                },
                {
                  step: '3',
                  title: 'AI Explanation',
                  description: 'An LLM generates detailed explanations for why each movie matches your request'
                },
                {
                  step: '4',
                  title: 'Translation Back',
                  description: 'Explanations are translated back to your original language and delivered'
                }
              ].map((process, index) => (
                <div key={index} className="flex items-start space-x-6 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {process.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {process.title}
                    </h3>
                    <p className="text-gray-600">
                      {process.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Discover Amazing Movies?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Start using our intelligent movie recommender system today. 
            It's free, multilingual, and powered by cutting-edge AI.
          </p>
          <Link
            to="/recommend"
            className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 inline-block"
          >
            Get Movie Recommendations
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;