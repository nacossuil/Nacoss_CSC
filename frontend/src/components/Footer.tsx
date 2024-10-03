import insta from "../assets/f_insta.png";
import twitter from "../assets/f_twitter.png";
import arrow from "../assets/arrowWithoutBg.gif";

const Footer = () => {
    return (
        <footer className="bg-[#29176B] py-8 text-white rounded-t-lg shadow-lg">
            <div className="container mx-auto flex flex-col items-center space-y-6">
                {/* Social Media Links */}
                <div className="flex justify-center space-x-6">
                    <a
                        href="https://x.com/NACOSS_UIL/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 border border-gray-400 py-2 px-6 rounded-full hover:bg-[#1DA1F2] hover:text-white transition duration-300 transform hover:scale-105"
                    >
                        <img src={twitter} alt="Twitter" className="h-6 w-6"/>
                        <span className="text-sm font-semibold">Twitter</span>
                    </a>
                    <a
                        href="https://www.instagram.com/nacos_unilorin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 border border-gray-400 py-2 px-6 rounded-full hover:bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] hover:text-white transition duration-300 transform hover:scale-105"
                    >
                        <img src={insta} alt="Instagram" className="h-6 w-6"/>
                        <span className="text-sm font-semibold">Instagram</span>
                    </a>
                </div>

                {/* Footer Text */}
                <div className="relative flex items-center justify-center py-4">
                    <img
                        src={arrow}
                        alt="Right-pointing arrow"
                        className="absolute right-full mr-2 h-12 w-12"
                    />
                    <p className="text-sm">
                        © Developed by Nacoss 2022/2023 with ❤️. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
