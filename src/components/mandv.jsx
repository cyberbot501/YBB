import React from 'react'
import myImage from '../assets/image 6.svg'
import myImage2 from '../assets/image 9.svg'

export default function mandv() {
  return (
    <div className='overflow-hidden mand'>
         <div className='flex flex-row lg:px-[90px] justify-evenly items-start md:items-start md:gap-[100px] lg:items-center lg:gap-[290px] overflow-hidden'>
            <div className='flex flex-col'>
              <h2 className='underline decoration-4 decoration-[#C33AAA] text-white text-[18px] md:text-[36px] font-inter font-medium lg:w-[370px]  '>Vision Statement</h2>
              <p className='text-white text-[14px] md:text-[27px] lg:text-[32px] font-inter font-light w-[170px] md:w-[300px] lg:w-[450px] '>A world where women lead with confidence, transcend barriers, and redefine gender advocacy through empowerment, unity, and personal evolution, contributing to sustainable global development.</p>
            </div>

            <div className='flex flex-col '>
              <h2 className='underline decoration-4 decoration-[#C33AAA] text-white text-[18pxpx] md:text-[36px] font-inter font-medium lg:w-[370px]  '>Mission Statement</h2>
              <p className='text-white text-[14px]  md:text-[27px] lg:text-[32px] font-inter font-light w-[170px] md:w-[300px] lg:w-[450px] '>By 2026, we are committed to reaching and empowering over 5,000 women, expanding our impact to five African countries with 500 active community members Aligned with(SDGs) 5, 4, and 8.</p>
          </div>
         </div>
    </div>
  )
}
