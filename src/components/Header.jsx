import React, { useState } from 'react';
import Logo from './Logo';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md" 
      style={{
        fontFamily: "Poppins",
        fontWeight: "600",
        border: "1px solid #E6E3D2"
      }}>
      
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <Logo />
      </div>

      {/* Hamburger Menu Button (Small Screens) */}
      <div className="lg:hidden">
        <button
          className="text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } lg:flex lg:space-x-6 text-gray-700 absolute lg:static top-16 right-6 bg-white shadow-md lg:shadow-none rounded lg:rounded-none w-48 lg:w-auto z-50`}
      >
        <a href="#//" className="block lg:inline-block px-4 py-2 lg:px-0 hover:text-blue-500">
          Donor Programme
        </a>
        <a href="#//" className="block lg:inline-block px-4 py-2 lg:px-0 hover:text-blue-500">
          Fertility Preservation
        </a>
        <a href="#//" className="block lg:inline-block px-4 py-2 lg:px-0 hover:text-blue-500">
          Advanced Treatments
        </a>
        <a href="#/" className="block lg:inline-block px-4 py-2 lg:px-0 hover:text-blue-500">
          Infertility Treatments
        </a>
        <a href="#/" className="block lg:inline-block px-4 py-2 lg:px-0 hover:text-blue-500">
          IVF Testing
        </a>
        <a href="/" className="block lg:inline-block px-4 py-2 lg:px-0 hover:text-blue-500">
          About Us
        </a>
      </nav>

      {/* "Talk to Us" Button */}
      <button className="hidden lg:block px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
        Talk to Us →
      </button>
    </header>
  );
};

export default Header;
