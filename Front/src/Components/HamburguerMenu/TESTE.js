// src/HamburgerMenu.js

import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Botão do menu */}
      <button
        onClick={toggleMenu}
        className="p-4 text-gray-500 hover:text-gray-700 lg:hidden"
      >
        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>

      {/* Menu */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMenu}
      >
        <div className={`fixed top-0 left-0 w-64 bg-white h-full shadow-lg transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700"
            >
              <AiOutlineClose size={24} />
            </button>
          </div>
          <div className="flex flex-col p-4 space-y-4">
            <a href="#" className="px-4 py-2 text-gray-700 rounded hover:bg-gray-200">Home</a>
            <a href="#" className="px-4 py-2 text-gray-700 rounded hover:bg-gray-200">About</a>
            <a href="#" className="px-4 py-2 text-gray-700 rounded hover:bg-gray-200">Services</a>
            <a href="#" className="px-4 py-2 text-gray-700 rounded hover:bg-gray-200">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;