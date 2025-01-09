import React, { useState, useCallback, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import cscLogo from "../assets/nacoss_csc_logo.png";
import unilorinLogo from "../assets/unilorin-logo.svg";

/*
1. Enables Smooth Scrolling 
2. Edited the Navbar and optimized responsiveness 
3.
*/
interface DirectoryLink {
    href: string;
    label: string;
}

const DIRECTORY_LINKS: DirectoryLink[] = [
    {
        href: "https://drive.google.com/drive/folders/1QR9yBIMWBbQ0-lR60NhivgKJUYnjCAD1?usp=drive_link",
        label: "Study Resources"
    },
    {
        href: "https://drive.google.com/drive/folders/1eVBHZt7HCtxzvqrG9lyb7u3ZfMGZVSok?usp=sharing",
        label: "TechAccelerator Certificates"
    },
    {
        href: "https://drive.google.com/drive/folders/11teLR7hqzVXJN_Zgn9Ic5tS8GQmwvjmY?usp=drive_link",
        label: "Repository"
    }
];

const Navbar: React.FC = React.memo(() => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDirectoryDropdownOpen, setIsDirectoryDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    // Close dropdown and mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDirectoryDropdownOpen(false);
            }
            
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prevState => !prevState);
    }, []);

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
        setIsDirectoryDropdownOpen(false);
    }, []);

    const toggleDirectoryDropdown = useCallback(() => {
        setIsDirectoryDropdownOpen(prev => !prev);
    }, []);

    return (
        <nav 
            id="navbar" 
            className="bg-white p-4 border-b border-gray-200 shadow sticky top-0 z-50"
            aria-label="Main Navigation"
        >
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo Container */}
                <div className="flex items-center gap-4" aria-label="Organization Logos">
                    <img 
                        src={cscLogo} 
                        alt="NACOSS Computer Science Community Logo" 
                        className="h-14 w-14 object-contain" 
                        loading="lazy" 
                    />
                    <img 
                        src={unilorinLogo} 
                        alt="University of Ilorin Official Logo" 
                        className="h-14 w-14 object-contain" 
                        loading="lazy" 
                    />
                </div>

                {/* Navigation Links */}
                <div 
                    ref={mobileMenuRef}
                    className={`
                        lg:flex lg:items-center lg:space-x-4
                        fixed lg:static 
                        ${isMenuOpen 
                            ? 'top-20 left-0 w-full h-screen lg:h-auto bg-white/95 lg:bg-transparent shadow-lg lg:shadow-none p-4 z-50 flex flex-col space-y-4' 
                            : 'hidden lg:flex'
                        }
                    `}
                >
                    <nav className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4 w-full">
                        <a 
                            href="#hero" 
                            className="px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-md transition w-full lg:w-auto text-center lg:text-left"
                            onClick={closeMenu}
                        >
                            Home
                        </a>
                        <a 
                            href="#about" 
                            className="px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-md transition w-full lg:w-auto text-center lg:text-left"
                            onClick={closeMenu}
                        >
                            About
                        </a>
                        <a 
                            href="#executives" 
                            className="px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-md transition w-full lg:w-auto text-center lg:text-left"
                            onClick={closeMenu}
                        >
                            Executives
                        </a>
                        <a 
                            href="#events" 
                            className="px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-md transition w-full lg:w-auto text-center lg:text-left"
                            onClick={closeMenu}
                        >
                            Events
                        </a>

                        {/* Directory Dropdown */}
                        <div ref={dropdownRef} className="relative w-full">
                            <button 
                                onClick={toggleDirectoryDropdown}
                                className="flex items-center justify-center lg:justify-start px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-md transition w-full"
                            >
                                Directory
                                <ChevronDown 
                                    className={`ml-2 transition-transform duration-300 ${
                                        isDirectoryDropdownOpen ? 'rotate-180' : ''
                                    }`} 
                                    size={16} 
                                />
                            </button>

                            {isDirectoryDropdownOpen && (
                                <ul className="
                                    lg:absolute lg:top-full lg:left-0 lg:mt-2 lg:w-64 
                                    bg-white shadow-lg rounded-md 
                                    border border-gray-200 
                                    z-50 space-y-2 p-2
                                    w-full lg:w-auto
                                ">
                                    {DIRECTORY_LINKS.map((link) => (
                                        <li key={link.href} className="w-full">
                                            <a
                                                href={link.href}
                                                className="
                                                    block px-4 py-2 
                                                    text-gray-700 
                                                    hover:bg-blue-50 
                                                    rounded-md
                                                    transition
                                                    text-center lg:text-left
                                                "
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={() => {
                                                    toggleDirectoryDropdown();
                                                    closeMenu();
                                                }}
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <a 
                            href="#contact" 
                            className="px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-md transition w-full lg:w-auto text-center lg:text-left"
                            onClick={closeMenu}
                        >
                            Contact
                        </a>
                    </nav>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-2 bg-gray-100 hover:bg-gray-200 transition"
                        aria-label={isMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
                        aria-expanded={isMenuOpen}
                        aria-controls="navbar-menu"
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6 text-gray-700" />
                        ) : (
                            <Menu className="h-6 w-6 text-gray-700" />
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
});

export default Navbar;
