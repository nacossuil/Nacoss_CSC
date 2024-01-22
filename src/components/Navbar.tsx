
import React, { useState } from 'react';
import hamburger from "../assets/hamburger.png"
import cscLogo from "../assets/csc_logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white-800 p-4 border-b border-[#111111]">
      <div className="container mx-auto flex justify-between">
        {/* Logo */}
        <div className="">
          <img src={cscLogo} />
        </div>

        {/* Nav List */}
        <ul
          className={`lg:flex ${
            isMenuOpen ? 'flex flex-col justify-center items-center w-full' : 'hidden'
          } lg:flex-row space-x-4`}
        >
          <li>
            <a href="/" className="text-[#11111199] hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-[#11111199] hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="/executives" className="text-[#11111199] hover:text-gray-300">
              Executives
            </a>
          </li>
          <li>
            <a href="/events" className="text-[#11111199] hover:text-gray-300">
              Events
            </a>
          </li>
          <li>
            <a href="/contact" className="text-[#11111199] hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>

       
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className=""
          >
            <img src={hamburger} />
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar;
