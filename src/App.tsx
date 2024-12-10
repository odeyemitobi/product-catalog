import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '../src/store';
import ProductListing from '../src/components/Products/product-listing';
import { PiSunFill } from "react-icons/pi";
import { FaMoon } from "react-icons/fa6";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <header className="bg-white dark:bg-gray-800 shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Product Catalog</h1>
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {darkMode ? (
                <PiSunFill className="text-gray-800 dark:text-white" />
              ) : (
                <FaMoon className="text-gray-800" />
              )}
            </button>
          </div>
        </header>
        <main>
          <ProductListing />
        </main>
      </div>
    </Provider>
  );
};

export default App;