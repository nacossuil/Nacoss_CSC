import React from "react";

import insta from "../assets/f_insta.png";
import fb from "../assets/f_facebook.png";
import twitter from "../assets/f_twitter.png";
import linkedin from "../assets/f_linkedin.png";

const Footer = () => {
  return (
    <div className="bg-[#29176B]">
      <div className="bg-[#29176B] h-[200px] w-full flex flex-col justify-center items-center">
        <div className="flex justify-evenly text-white flex justify-between items-center">
          <div className="w-[100px] border border-[#888] py-2 px-8 w-48 flex justify-center items-center">
            <img src={twitter} alt="" className="h-[12px] w-[12px] mr-2" />
            <p className="text-[12px] text-[#fff]">twitter</p>
          </div>
          <div className="w-[100px] border border-[#888] py-2 px-8 w-48 flex justify-center items-center">
            <img src={insta} alt="" className="h-[12px] w-[12px] mr-2" />
            <p className="text-[12px] text-[#fff]">instagram</p>
          </div>
          <div className="w-[100px] border border-[#888] py-2 px-8 w-48 flex justify-center items-center">
            <img src={linkedin} alt="" className="h-[12px] w-[12px] mr-2" />
            <p className="text-[12px] text-[#fff]">linkedin</p>
          </div>
          <div className="w-[100px] border border-[#888] py-2 px-8 w-48 flex justify-center items-center">
          <img src={fb} alt="" className="h-[12px] w-[12px] mr-2" />
            <p className="text-[12px] text-[#fff]">facebook</p>
          </div>
        </div>
      </div>
      <p className="text-center text-[12px] text-[#fff]">
        © 2023 Chumskiisama. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
