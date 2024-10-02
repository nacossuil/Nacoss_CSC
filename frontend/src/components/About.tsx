import about from "../assets/about.png";
import star from "../assets/star3.png";
import infinity from "../assets/Infinity.png";
import grid from "../assets/Grid.png";

const About = () => {
    return (
        <section
            id="about"
            className="relative container mx-auto flex flex-col justify-center items-center py-10 px-4 sm:px-8 md:px-16"
            style={{ backgroundImage: `url(${grid})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
        >
            {/* Decorative Stars and Infinity Symbols */}
            <img
                src={star}
                alt="Decorative star"
                className="hidden md:block absolute top-24 right-1/4 w-8 h-8 md:w-12 md:h-12"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    {/* Textual Content */}
                    <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
                        <h4 className="text-blue-700 font-bold text-lg sm:text-xl mb-4">
                            ABOUT US
                        </h4>
                        <h2 className="font-bold text-3xl sm:text-4xl leading-tight mb-6">
                            The Most Organized Student Body in Nigeria by Far !!!
                        </h2>
                        <p className="text-base leading-relaxed mb-8 text-gray-700">
                            <strong>NACOSS (Nigerian Association of Computer Science Students)</strong> is the
                            premier organization for students pursuing Computer Science. Our mission is simple:
                            to foster a thriving community of future innovators, provide resources for academic
                            excellence, and empower students to reach their full potential.
                        </p>

                        <div className="flex items-center mb-4">
                            <h4 className="font-bold text-xl sm:text-2xl mb-4">
                                How do we achieve this?
                            </h4>
                            <img
                                src={infinity}
                                alt="Infinity symbol"
                                className="hidden md:block ml-4 h-7 w-14"
                            />
                        </div>

                        <ul className="list-disc list-inside text-base leading-relaxed mb-8 text-gray-700">
                            <li>Regular workshops and seminars to enhance technical skills</li>
                            <li>Networking events with industry professionals</li>
                            <li>Hackathons and coding competitions</li>
                            <li>Mentorship programs pairing juniors with seniors</li>
                            <li>Access to internship and job opportunities</li>
                        </ul>

                        <p className="text-base leading-relaxed mb-8 text-gray-700">
                            Our dedicated executive team works tirelessly to serve the interests of our members,
                            ensuring a memorable and enriching university experience.
                        </p>

                        {/* Call-to-Action Button */}
                        <a
                            href="https://x.com/NACOSS_UIL" // Replace with your Twitter URL
                            className="inline-block bg-blue-700 hover:bg-blue-800 text-white text-base font-semibold py-2 px-6 rounded-full transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="Join NACOSS"
                        >
                            Join Us Today!
                        </a>
                    </div>

                    {/* Image Content */}
                    <div className="w-full lg:w-5/12">
                        <img
                            src={about}
                            alt="NACOSS members collaborating"
                            className="w-full h-auto rounded-lg shadow-xl"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
