import React from 'react';
import hero from "../assets/hero.png";
import grid from "../assets/Grid.png";
import star1 from "../assets/star1.png";
import star2 from "../assets/star2.png";
import infinity from "../assets/Infinity.png";
import direction from "../assets/Direction.png";

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative container mx-auto flex flex-col justify-center items-center py-4 px-4 sm:px-8 md:px-16"
            style={{ backgroundImage: `url(${grid})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
        >
            {/* Decorative Stars and Infinity Symbols */}
            <img src={star1} alt="Decorative star" className="hidden md:block absolute left-8 top-16 h-6 w-6" />
            <img src={infinity} alt="Infinity symbol" className="hidden md:block absolute right-8 top-16 h-6 w-12" />
            <img src={direction} alt="Directional arrow" className="hidden md:block absolute left-8 bottom-16 h-6 w-10" />

            {/* Main Hero Image */}
            <div className="relative w-full max-w-3xl">
                <img src={hero} alt="NACOSS Unilorin Hero" className="mx-auto w-full h-auto mt-8 rounded-md shadow-lg" />
            </div>

            {/* Textual Content */}
            <div className='flex flex-col justify-center items-center text-center mt-6'>
                {/* Subheading with Decorative Star */}
                <div className="relative mb-6">
                    <img src={star2} alt="Decorative star" className='absolute left-1/2 -top-6 transform -translate-x-1/2 h-8 w-6' />
                    <h2 className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-800 font-semibold">
                        Code 💻. Innovate 🧠. Transform 🚀
                    </h2>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight text-gray-900 font-bold mb-4">
                    NACOSS Unilorin: Shaping Tomorrow's Tech Leaders
                </h1>

                {/* Bottom Infinity Symbol */}
                <img src={infinity} alt="Infinity symbol" className="hidden md:block absolute right-8 bottom-16 h-6 w-12" />

                {/* Description */}
                <p className='text-base sm:text-lg text-center max-w-2xl mb-6 text-gray-700'>
                    Join a vibrant community of 500+ tech enthusiasts. Gain hands-on experience,
                    access exclusive internships, and build a network that will propel your tech career forward.
                </p>

                {/* Call-to-Action Button */}
                <a
                    href="#signup"
                    className='bg-blue-700 hover:bg-blue-800 text-white text-base font-semibold py-3 px-8 rounded-full transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    aria-label="Join the Community Today"
                >
                    Join the Community Today!
                </a>
            </div>
        </section>
    );
}

export default Hero;
