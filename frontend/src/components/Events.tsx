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
      eventName: "National Innovation summit",
      description:
        "Is to become a network of committed Student IT Professionals",
    },
    {
      id: 1,
      img: virtual,
      eventName: "National Innovation summit",
      description:
        "Is to become a network of committed Student IT Professionals",
    },
    {
      id: 2,
      img: ar,
      eventName: "National Innovation summit",
      description:
        "Is to become a network of committed Student IT Professionals",
    },
  ];

  return (
    <div className="my-12" id="events">
      <p className="text-center leading-[48px] font-bold text-[3rem] mb-8 hero-text">
        Events and Bootcamps
      </p>
      <div className="flex flex-col flex-wrap justify-center items-center">
        <div className="flex w-[22rem] bg-[#E1E1E1] rounded-[10px] event-btn">
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
              <div
                className="flex flex-col w-[300px] mx-6 shadow-lg bg-white rounded-md"
                key={info.id}
              >
                <img src={info.img} alt="" className="w-full" />
                <div className="px-4 py-6">
                  <p className="font-semibold my-2 event-txt">{info.eventName}</p>
                  <p className="text-[12px] sub-text">{info.description}</p>
                </div>
                <div className="flex justify-between px-4 py-4">
                  <div>
                    <span className="flex">
                      <img src={cal} className="w-[12px] h-[12px]" />
                      <p className="text-[10px] sub-text ml-2 m">
                        12 Sep, 2023 - 28 Sep, 2023
                      </p>
                    </span>
                    <span className="flex mt-2">
                      <img src={time} className="w-[12px] h-[12px]" />
                      <p className="text-[10px] sub-text ml-2">12 PM - 2:30 PM</p>
                    </span>
                    <span className="flex mt-2">
                      <img src={location} className="w-[12px] h-[12px]" />
                      <p className="text-[10px] sub-text ml-2">CISLT</p>
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-[12px] sub-text text-right">NGN2,500</p>
                    <button className="bg-[#D8A331] hover:bg-[#29176B] text-[#fff] text-[12px] py-2 px-4 rounded-[30px] mt-2">Buy tickets</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Events;
