import React from "react";
import about from "../assets/about.png";
import star from "../assets/star3.png";
import direction from "../assets/Direction2.png";
import infinity from "../assets/Infinity.png"

const About = () => {
  return (
    <div>
      <img src={star} alt="" className="relative top-[22rem] left-[32rem] w-[2rem] h-[2rem]" />
      <div className="flex flex-wrap justify-evenly items-center py-24">
        <div className="w-[33%]">
          <p className="text-[#C49C45] font-bold text-[20px] leading-[28px] mb-6">
            ABOUT US
          </p>
          <p className="font-bold text-[36px] leading-[48px]">
            Most Organised Student Body in Unilorin
          </p>
          <p className="text-[1rem] leading-[28px] mt-6">
            Nigeria Association of Computing Students (NACOS) is the umbrella
            body for students studying Computer Science, Computer Engineering,
            Information Systems, Cyber Security, Software Engineering,
            Telecommunications Engineering, and all IT-related courses in
            Nigeria and have been in existence for over two decades.
          </p>
          <img src={infinity} alt="" className="w-[2rem] h-[1rem] relative top-6"/>
        </div>
        <div>
          <img src={about} />
        </div>
      </div>
      <img src={direction} alt="" className="relative left-[56rem] bottom-4 w-[2rem] h-[1rem]" />
    </div>
  );
};

export default About;
