import React from 'react'
import hero from "../assets/hero.png"
import grid from "../assets/Grid.png"
import star1 from "../assets/star1.png"
import star2 from "../assets/star2.png"
import infinity from "../assets/Infinity.png"
import direction from "../assets/Direction.png"

const Hero = () => {
  return (
    <div className='container mx-auto flex flex-col justify-center items-center pt-16' style={{background: `url(${grid})`,}}>
        <div>
          <img src={direction} alt="" className='relative left-[39rem] top-8 h-[1rem] w-[2rem]' />
           <img src={hero} />
        </div>
        <div className='flex flex-col justify-center items-center px-72 text-center'>
          <img src={star1} alt="" className='relative right-[36rem] bottom-44 h-[30px] w-[30px]' />
          <img src={star2} alt="" className='relative right-36 h-[30px] w-[30px]' />
          <img src={infinity} className='relative left-[30rem] bottom-[10rem] h-[2rem] w-[4rem]' alt="" />
            <p className='font-normal leading-[28px] text-[24px] bottom-16 relative'>Welcome to the</p>
            <p className='font-bold text-[3rem] leading[56px] text-[#111111] bottom-12 relative'>Department of Computer Science Unilorin</p>
            <img src={direction} className='relative left-[26rem] bottom-24' />
            <p className='text-center px-32 relative bottom-16'>We provide access to technical contents such as programming, networking e.t.c</p>
            <button className='bg-[#D8A331] text-[#fff] mt-6 rounded-[30px] px-12 h-[2.5rem] relative bottom-12'>Learn nore</button>
            <img src={infinity} alt="" className='relative right-[28rem] h-[3rem] w-[5rem] relative bottom-12' />
        </div>
    </div>
  )
}

export default Hero