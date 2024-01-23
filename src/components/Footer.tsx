import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#29176B]">
      <div className="bg-[#29176B] h-[200px] w-full flex flex-col justify-center items-center">
        <div className="flex justify-evenly text-white flex justify-between items-center">
          <div className="w-[100px] border border-[#888]">
            <p>twitter</p>
          </div>
          <div className="w-[100px] border border-[#888]">
            <p>instagram</p>
          </div>
          <div className="w-[100px] border border-[#888]">
            <p>linkedin</p>
          </div>
          <div className="w-[100px] border border-[#888]">
            <p>facebook</p>
          </div>
        </div>
      </div>
      <p className="text-center text-[12px] text-[#fff]">© 2023 Chumskiisama. All rights reserved.</p>
    </div>
  );
};

export default Footer;
