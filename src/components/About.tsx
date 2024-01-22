import React from "react";
import about from "../assets/about.png"

const About = () => {
  return (
    <div className="flex justify-evenly items-center py-48">
      <div className="w-[40%]">
        <p>ABOUT US</p>
        <p>Most Organised Student Body in Unilorin</p>
        <p>
          Nigeria Association of Computing Students (NACOS) is the umbrella body
          for students studying Computer Science, Computer Engineering,
          Information Systems, Cyber Security, Software Engineering,
          Telecommunications Engineering, and all IT-related courses in Nigeria
          and have been in existence for over two decades.
        </p>
      </div>
      <div>
        <img src={about} />
      </div>
    </div>
  );
};

export default About;
