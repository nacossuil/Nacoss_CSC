import React from "react";
import execImg from "../assets/execImg.png";
import elinked from "../assets/elinkedin.png";
import etwitter from "../assets/etwitter.png";
import egmail from "../assets/egmail.png";

const Execs = () => {
  const execInfo = [
    {
      id: 0,
      name: "Gbolarumi Elijah",
      title: "NACOS President",
      linkedin: "",
      gmail: "",
      twitter: "",
    },
    {
      id: 1,
      name: "Gbolarumi Elijah",
      title: "NACOS President",
      linkedin: "",
      gmail: "",
      twitter: "",
    },
    {
      id: 2,
      name: "Gbolarumi Elijah",
      title: "NACOS President",
      linkedin: "",
      gmail: "",
      twitter: "",
    },
    {
      id: 3,
      name: "Gbolarumi Elijah",
      title: "NACOS President",
      linkedin: "",
      gmail: "",
      twitter: "",
    },
    {
      id: 4,
      name: "Gbolarumi Elijah",
      title: "NACOS President",
      linkedin: "",
      gmail: "",
      twitter: "",
    },
    {
      id: 5,
      name: "Gbolarumi Elijah",
      title: "NACOS President",
      linkedin: "",
      gmail: "",
      twitter: "",
    },
  ];

  return (
    <div className="">
      <p className="text-center leading-[48px] font-bold text-[3rem] mb-8">Meet our Executives</p>
      <div className="flex flex-wrap justify-center items-center">
        {execInfo.map((info) => {
          return (
            <div className="w-[270px] flex flex-col justify-center items-center my-8">
              <img src={execImg} />
              <p className="leading-[4rem]">{info.name}</p>
              <p className="leading-[1rem]">{info.title}</p>
              <div className="flex justify-between my-6">
                <img src={etwitter} className="mx-4" />
                <img src={egmail} className="mx-4" />
                <img src={elinked} className="mx-4" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Execs;