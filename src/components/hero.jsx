import React from 'react'
import heroi from '../assets/image.svg'

export default function hero() {
  return (
    <div className='bg-[white] flex flex-col md:flex-row items-center justify-center md:gap-[70px] px-[25px] md:px-[40px] pt-[140px] md:pb-6 md:pt-24 overflow-hidden'>
        <div className='flex flex-col gap-4 items-center md:items-start justify-center md:justify-start'>
            <h2 className='font-climate font-bold text-[#5D1C51] md:text-start text-center text-[30px] md:text-[46px] md:w-[64px] '>EMPOWER ELEVATE TRANSFORM</h2>
            <p className='font-roboto font-medium text-[#00000050] md:text-start text-center text-[16px] md:text-[18px] md:w-[593px] '>
                WE ARE THE LEADING FEMALE COMMUNITY AROUND AFRICA
                BREAKING BARRIERS AND BUILDING FUTURES FOR 
                WOMEN ACROSS THE WORLD.
            </p>
            <button className='bg-[#9B2B87] w-[200px] h-[54px] rounded-[20px] text-white font-inter text-[20px] font-semibold'>Learn More</button>
        </div>
        <img src={heroi} alt="" className='w-[533px] h-[605px] rounded-[20px] '/>
    </div>
  )
}
