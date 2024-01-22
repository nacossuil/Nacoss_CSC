import React from 'react'
import hero from "../assets/hero.png"

const Hero = () => {
  return (
    <div className='container mx-auto flex flex-col justify-center items-center pt-16'>
        <div>
           <img src={hero} />
        </div>
        <div className='flex flex-col justify-center items-center px-72 text-center'>
            <p className='font-normal leading-[28px] text-[24px] my-6'>Welcome to the</p>
            <p className='font-bold text-[3rem] leading[56px] text-[#111111]'>Department of Computer Science Unilorin</p>
            <p className='text-center px-32'>We provide access to technical contents such as programming, networking e.t.c</p>
            <button className='bg-[#D8A331] text-[#fff] mt-6 rounded-[30px] px-12 h-[2.5rem]'>Learn nore</button>
        </div>
    </div>
  )
}

export default Hero