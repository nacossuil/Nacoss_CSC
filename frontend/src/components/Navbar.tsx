import { useState } from 'react';
import hamburger from "../assets/hamburger.png";
import cscLogo from "../assets/nacoss_csc_logo.png";
import unilorinLogo from "../assets/unilorin-logo.svg";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Reusable class string for navigation links
    const navLinkClasses = "py-2 px-4 rounded-md text-gray-700 hover:bg-blue-700 hover:text-white transition duration-300";

    return (
        <nav id="navbar" className="bg-white p-4 border-b border-gray-200 shadow sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo Container */}
                <div className="flex items-center gap-4">
                    <img src={cscLogo} alt="NACOSS CSC Logo" className="h-14 w-14 object-contain" loading="lazy" />
                    <img src={unilorinLogo} alt="Unilorin Logo" className="h-14 w-14 object-contain" loading="lazy" />
                </div>

                {/* Navigation Links */}
                <ul
                    className={`lg:flex ${
                        isMenuOpen ? 'flex flex-col absolute top-20 left-0 w-full bg-white shadow-md lg:shadow-none lg:flex-row lg:static' : 'hidden'
                    }`}
                >
                    <li>
                        <a
                            href="#hero"
                            className={navLinkClasses}
                            onClick={closeMenu}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className={navLinkClasses}
                            onClick={closeMenu}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#executives"
                            className={navLinkClasses}
                            onClick={closeMenu}
                        >
                            Executives
                        </a>
                    </li>
                    <li>
                        <a
                            href="#events"
                            className={navLinkClasses}
                            onClick={closeMenu}
                        >
                            Events
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://drive.google.com/drive/folders/1QR9yBIMWBbQ0-lR60NhivgKJUYnjCAD1?usp=drive_link"
                            className={navLinkClasses}
                            onClick={closeMenu}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Study Resources
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://drive.google.com/drive/folders/1eVBHZt7HCtxzvqrG9lyb7u3ZfMGZVSok?usp=sharing"
                            className={navLinkClasses}
                            onClick={closeMenu}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            TechAccelerator Certificates
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://drive.google.com/drive/folders/11teLR7hqzVXJN_Zgn9Ic5tS8GQmwvjmY?usp=drive_link"
                            className={navLinkClasses}
                            onClick={closeMenu}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Repository
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className={navLinkClasses}
                            onClick={closeMenu}
                        >
                            Contact us
                        </a>
                    </li>
                </ul>

                {/* Hamburger Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="focus:outline-none"
                        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                        aria-expanded={isMenuOpen}
                        aria-controls="navbar-menu"
                    >
                        <img src={hamburger} alt={isMenuOpen ? "Close Menu" : "Open Menu"} className="h-8 w-8" loading="lazy" />
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
