import React from 'react'
import './stay.css'

export default function stay() {
  return (
    <div className="stay flex flex-col justify-center items-center px-[20px] lg:px-[40px]  py-14 overflow-hidden">
         <div className='flex flex-col justify-center items-center pb-10 lg:pb-20'>
            <h2 className='font-roboto font-normal text-[30px] lg:text-[45px] text-center text-white '>Stay updated</h2>
            <p className='font-roboto font-normal text-[18px] lg:text-[22px] text-center text-white'>Stay up to date on our  Events, outreach and MORE</p>
         </div>
         
         <form action="" className='flex flex-col justify-center items-center lg:items-start gap-7'>
            <label htmlFor="">
                <p className='text-[22px] font-roboto font-light text-white '>E-mail Address</p>
                <input type="text" id="fname" name="fname" placeholder="example@gmail.com" className='lg:w-[971px] w-[300px] h-[52px] px-3'/>
            </label>

            <label htmlFor="">
                <p className='text-[22px] font-roboto font-light text-white '>First Name</p>
                <input type="text" id="fname" name="fname" placeholder="Jomiloju Joel" className='lg:w-[971px] w-[300px] h-[52px] px-3 '/>
            </label>
            <p className='lg:pl-[0px] pl-[30px] text-[white] text-[16px] font-roboto font-light '>I agree to receive notification, updates, publications, alerts,newsletters from the<br />
            fnfeefoundation.org</p>

            <button className='bg-[#C33AAA] w-[231px] h-[64px] text-white font-roboto font-light text-[23px] '>SUBSCRIBE</button>
         </form>
    </div>
  )
}
