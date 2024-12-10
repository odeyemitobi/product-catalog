import React from "react";
import { PiSunFill } from "react-icons/pi";
import { FaMoon } from "react-icons/fa6";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#17181A] shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#17181A] dark:text-white">
          Product Catalog
        </h1>
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
  );
};

export default Navbar;
