// src/SideNavbar.js
import React, { useState } from 'react';


const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex fixed">
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleNavbar}
      ></div>
      <div
        className={`bg-gray-800 text-white w-64 h-full fixed transform transition-transform ${
          isOpen ? 'translate-x-[-10px]' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-5">
          <div className="text-lg font-bold">MyLogo</div>
          <button onClick={toggleNavbar} className="text-white">
            &#10005; {/* Close Icon */}
          </button>
        </div>
        <ul className="mt-20">
          <li>
            <a href="#" className="block px-12 py-3 hover:bg-gray-700  transition-transform duration-300 hover:translate-x-5 hover:text-white hover:text-xl  hover:font-bold">
              Text Editor
            </a>
          </li>
          <li>
            <a herf="#" className="block px-12 py-3 hover:bg-gray-700 cursor-pointer transition-transform duration-300 hover:translate-x-5 hover:text-white hover:text-xl  hover:font-bold ">
              To Do List
            </a>
          </li>
          <li>
            <a herf="#" className="block px-12 py-3 hover:bg-gray-700 cursor-pointer  transition-transform duration-300 hover:translate-x-5 hover:text-white hover:text-xl  hover:font-bold">
              Weather App
            </a>
          </li>
          <li>
            <a herf="#" className="block px-12 py-3 hover:bg-gray-700 cursor-pointer  transition-transform duration-300 hover:translate-x-5 hover:text-white hover:text-xl  hover:font-bold">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <button onClick={toggleNavbar} className=" px-12 ">
        &#9776; {/* Hamburger Icon */}
      </button>
      <div className="flex-1 p-6">
        <h1 className="text-2xl">Welcome to My Site</h1>
        {/* Other content */}
      </div>
    </div>
  );
};

export default SideNavbar;
