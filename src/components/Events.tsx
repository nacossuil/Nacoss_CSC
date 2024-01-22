import React from "react";
import chip from "../assets/chip.png";
import virtual from "../assets/virtual.png";
import ar from "../assets/ar.png";
import time from "../assets/time.png";
import location from "../assets/location.png";
import cal from "../assets/cal.png";

const Events = () => {
  const eventInfo = [
    {
      id: 0,
      img: chip,
    },
    {
      id: 1,
      img: virtual,
    },
    {
      id: 2,
      img: ar,
    },
  ];

  return (
    <div className="my-12">
      <p className="text-center leading-[48px] font-bold text-[3rem] mb-8">
        Events and Bootcamps
      </p>
      <div className="flex flex-col flex-wrap justify-center items-center">
        <div className="flex w-[24rem] bg-[#E1E1E1] rounded-[10px]">
          <button className="bg-[#F2F2F2] w-full border border-solid border-gray-300 p-4 rounded-[10px]">
            Upcoming events
          </button>
          <button className="bg-[#E1E1E1] p-4 w-full rounded-[10px]">
            Past events
          </button>
        </div>
        <div className="flex flex-wrap justify-between items-center py-16">
          {eventInfo.map((info) => {
            return (
              <div className="flex" key={info.id}>
                <img src={info.img} alt="" className="w-[250px]" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Events;
