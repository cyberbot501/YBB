import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import logo from '../../assets/image 5.svg'

export default function footer() {
  return (
    <div className='flex flex-col justify-center items-center bg-[white]'>
        <div className='bg-black w-[100%] overflow-hidden flex flex-col md:flex-row py-10 justify-center items-center gap-28 md:gap-56'>
            <div className='flex flex-col gap-8'>
                <div className=' flex flex-col gap-4'> 
                    <p className='font-roboto font-normal text-[18px] text-white '>WE ARE ACTIVE ON SOCIAL MEDIA</p>
                    <div className='flex flex-row gap-5'>
                            <NavLink to =''><FaFacebook className='bg-white w-[26px] h-[26px] ' /></NavLink>
                            <NavLink to =''><FaLinkedin className='bg-white w-[26px] h-[26px] ' /></NavLink>
                            <NavLink to =''><AiFillTikTok className='bg-white w-[26px] h-[26px] ' /></NavLink>
                            <NavLink to =''><FaSquareXTwitter className='bg-white w-[26px] h-[26px] ' /></NavLink>
                            <NavLink to =''><FaInstagramSquare className='bg-white w-[26px] h-[26px] ' /></NavLink>
    
                    </div>
                </div>
                <div className='flex flex-col'>
                    <p className='text-[#C33AAA] text-[18px] font-roboto font-normal '>Call:  +23490242081599</p>
                    <p className='text-[#C33AAA] text-[18px] font-roboto font-normal '>Send us an email <br/>
                    <span><a href='brokenyettransformed@gmail.com'>@brokenyettransformed@gmail.com</a></span></p>
                    <p className='text-[#C33AAA] text-[18px] font-roboto font-normal '>Join our network across Africa</p>
                </div>
            </div>


            <div className='flex flex-col md:flex-row gap-16'>
                <div className='flex flex-col gap-8'>
                    <p className='font-normal text-[white] font-roboto text-[19px] '>ABOUTS US</p>
                    <ul className='flex flex-col gap-3'>
                        <li><NavLink className='font-roboto text-white font-light text-[18px] '>Mission & vision</NavLink></li>
                        <li><NavLink className='font-roboto text-white font-light text-[18px] '>Partners</NavLink></li>
                        <li><NavLink className='font-roboto text-white font-light text-[18px] '>Mentors</NavLink></li>
                        <li><NavLink className='font-roboto text-white font-light text-[18px] '>Get involved</NavLink></li>
                    </ul>
                </div>


                <div className='flex flex-col gap-8'>
                    <p className='font-normal text-[white] font-roboto text-[19px] '>OUR PROGRAMMES</p>
                    <ul className='flex flex-col gap-3'>
                        <li><NavLink className='font-roboto text-white font-light text-[18px] '>Past Programs</NavLink></li>
                        <li><NavLink className='font-roboto text-white font-light text-[18px] '>impact</NavLink></li>
                        <li><NavLink className='font-roboto text-white font-light text-[18px] '>upcoming event</NavLink></li>
                        <li><NavLink className='font-roboto text-white font-light text-[18px] '>Get a franchise</NavLink></li>
                    </ul>
                </div>


                <div className='flex flex-col gap-8'>
                    <p className='font-normal text-[white] font-roboto text-[19px] '>RESOURCES</p>
                    <ul className='flex flex-col gap-3'>
                        <li><NavLink className='font-roboto text-white font-light text-[18px] '>FAQS</NavLink></li>
                        <li><NavLink className='font-roboto text-white font-light text-[18px] '>Media</NavLink></li>
                        <li><NavLink className='font-roboto text-white font-light text-[18px] '>Careers</NavLink></li>
                        <li><NavLink className='font-roboto text-white font-light text-[18px] '>FNFEE community</NavLink></li>
                    </ul>
                </div>

                
            </div>
        </div>
        <div className=''>
           <img src={logo} alt="" />
        </div>
    </div>
  )
}
