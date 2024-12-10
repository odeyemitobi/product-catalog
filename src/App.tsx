import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../src/store";
import ProductListing from "./components/Products/Product-Listing/product-listing";
import Navbar from "../src/components/Navbar";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 dark:bg-[#000] transition-colors duration-300">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="pt-20">
          <ProductListing />
        </main>
      </div>
    </Provider>
  );
};

export default App;
