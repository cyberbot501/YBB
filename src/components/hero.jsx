import React from 'react'
import heroi from '../assets/image.svg'
import { Link } from 'react-router-dom'

export default function hero() {
  return (
    <div className='bg-[white] flex flex-col lg:flex-row items-center justify-evenly lg:gap-[0px] px-[25px] md:px-[40px] pt-[140px] lg:pb-6 lg:pt-24 overflow-hidden'>
        <div className='flex flex-col gap-4 items-center lg:items-start justify-center lg:justify-start md:pb-8'>
            <h2 className='font-climate font-bold text-[#5D1C51] lg:text-start  text-center text-[30px] md:text-[46px] lg:w-[64px] '>EMPOWER ELEVATE TRANSFORM</h2>
            <p className='font-roboto font-medium text-[#00000050] lg:text-start text-center text-[16px] md:text-[18px] md:w-[593px] '>
                WE ARE THE LEADING FEMALE COMMUNITY AROUND AFRICA
                BREAKING BARRIERS AND BUILDING FUTURES FOR 
                WOMEN ACROSS THE WORLD.
            </p>
            <Link to='https://chat.whatsapp.com/HM1Z0qWPHuxKCqlUo7wSui' className='bg-[#9B2B87] w-[200px] h-[54px] place-content-center px-14 rounded-[20px] text-white font-inter text-[20px] font-semibold'>JOIN US</Link>
        </div>
        <img src={heroi} alt="" className='w-[533px] h-[605px] rounded-[20px] '/>
    </div>
  )
}
