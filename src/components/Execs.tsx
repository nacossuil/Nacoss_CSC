import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
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
      img: img1
    },
    {
      id: 1,
      name: "Gbolarumi Elijah",
      title: "NACOS President",
      linkedin: "",
      gmail: "",
      twitter: "",
      img: img2
    },
    {
      id: 2,
      name: "Gbolarumi Elijah",
      title: "NACOS President",
      linkedin: "",
      gmail: "",
      twitter: "",
      img: img3
    },
    {
      id: 3,
      name: "Gbolarumi Elijah",
      title: "NACOS President",
      linkedin: "",
      gmail: "",
      twitter: "",
      img: img1
    },
    {
      id: 4,
      name: "Gbolarumi Elijah",
      title: "NACOS President",
      linkedin: "",
      gmail: "",
      twitter: "",
      img: img2
    },
    {
      id: 5,
      name: "Gbolarumi Elijah",
      title: "NACOS President",
      linkedin: "",
      gmail: "",
      twitter: "",
      img: img3
    },
  ];

  return (
    <div className="" id="executives">
      <p className="text-center leading-[48px] font-bold text-[3rem] mb-8 hero-text">Meet our Executives</p>
      <div className="flex flex-wrap justify-center items-center">
        {execInfo.map((info) => {
          return (
            <div className="w-[270px] flex flex-col justify-center items-center my-8">
              <img src={info.img} alt="" className="rounded-[50%] h-[12.5rem] w-[12.5rem] object-fill" />
              <p className="leading-[4rem] text-[16px]">{info.name}</p>
              <p className="leading-[1rem] text-[13px]">{info.title}</p>
              <div className="flex justify-between my-6">
                <img src={etwitter} className="mx-4 h-[16px] w-[16px]" />
                <img src={egmail} className="mx-4 h-[16px] w-[16px]" />
                <img src={elinked} className="mx-4 h-[16px] w-[16px]" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Execs;
