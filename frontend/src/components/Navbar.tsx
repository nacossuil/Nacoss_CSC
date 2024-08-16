
import  { useState } from 'react';
import hamburger from "../assets/hamburger.png"
import cscLogo from "../assets/nacos_csc_logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#fff] p-4 border-[#111111] shadow-bottom-only sticky w-full top-[0] z-[1000]">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="">
          <img src={cscLogo} className='h-[120px] w-[120px]'/>
        </div>

        {/* Nav List */}
        <ul
          className={`lg:flex text-variant-one ${
            isMenuOpen ? 'flex flex-col justify-center items-center w-full' : 'hidden'
          } lg:flex-row space-x-4`}
        >
          <li>
            <a href="#home" className="text-[#11111199] hover:text-[#1D4E8D]">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-[#11111199] hover:text-[#1D4E8D]">
              About
            </a>
          </li>
          <li>
            <a href="#executives" className="text-[#11111199] hover:text-[#1D4E8D]">
              Executives
            </a>
          </li>
          <li>
            <a href="#events" className="text-[#11111199] hover:text-[#1D4E8D]">
              Events
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/drive/folders/1QR9yBIMWBbQ0-lR60NhivgKJUYnjCAD1?usp=drive_link" className="text-[#11111199] hover:text-[#1D4E8D]">
              Study Resources
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/drive/folders/11teLR7hqzVXJN_Zgn9Ic5tS8GQmwvjmY?usp=drive_link" className="text-[#11111199] hover:text-[#1D4E8D]">
              Repositories
            </a>
          </li>
          <li>
            <a href="#contact" className="text-[#11111199] hover:text-[#1D4E8D]">
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
