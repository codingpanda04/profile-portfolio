import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Home', to: 'home' },
    { title: 'About', to: 'about' },
    { title: 'Services', to: 'services' },
    { title: 'Work', to: 'work' },
    { title: 'Contact', to: 'contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 ${
        isDark ? 'bg-gray-900' : 'bg-white'
      } shadow-lg`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">Dennis Bundi</h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link cursor-pointer"
                >
                  {item.title}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {isDark ? (
                  <FaSun className="h-5 w-5" />
                ) : (
                  <FaMoon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="block nav-link cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
