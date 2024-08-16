import about from "../assets/about.png";
import star from "../assets/star3.png";
import direction from "../assets/Direction2.png";
import infinity from "../assets/Infinity.png"

const About = () => {
  return (
    <div id="about">
      <img src={star} alt="" className="relative top-[22rem] left-[32rem] w-[2rem] h-[2rem]" />
      <div className="flex flex-wrap justify-evenly items-center py-24">
        <div className="w-[33%]">
          <p className="text-[#C49C45] font-bold text-[20px] leading-[28px] mb-6 about-text">
            ABOUT US
          </p>
          <p className="font-bold text-[36px] leading-[48px] hero-text">
            Most Organised Student Body in Unilorin
          </p>
          <p className="text-[15px] leading-[28px] mt-6 sub-text">
            The Nigeria Association of Computer Science Students Unilorin (NACOSS) is the
            body for students studying Computer Science. Our mission is to foster a community
            of innovators, provide resources for academic excellence, and empower students
            to reach their full potential.
          </p>
          <p className="text-[15px] leading-[28px] mt-6 sub-text">
            We organize regular events, workshops, and seminars to enhance our members'
            skills and knowledge. Our executive team is dedicated to serving the interests
            of our members and ensuring a memorable university experience.
          </p>
          <img src={infinity} alt="" className="w-[2rem] h-[1rem] relative top-6"/>
        </div>
        <div>
          <img src={about}/>
        </div>
      </div>
      <img src={direction} alt="" className="relative left-[56rem] bottom-4 w-[2rem] h-[1rem]"/>
    </div>
  );
};

export default About;
