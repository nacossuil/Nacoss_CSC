
import  { useState } from 'react';
import hamburger from "../assets/hamburger.png"
import cscLogo from "../assets/nacos_csc_logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white-800 p-4 border-[#111111] shadow-bottom-only">
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
            <a href="#home" className="text-[#11111199] hover:text-[#D8A331]">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-[#11111199] hover:text-gray-[#D8A331]">
              About
            </a>
          </li>
          <li>
            <a href="#executives" className="text-[#11111199] hover:text-gray-[#D8A331]">
              Executives
            </a>
          </li>
          <li>
            <a href="#events" className="text-[#11111199] hover:text-gray-[#D8A331]">
              Events
            </a>
          </li>
          <li>
            <a href="#contact" className="text-[#11111199] hover:text-gray-[#D8A331]">
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
