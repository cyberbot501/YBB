import React, { useState, useEffect } from 'react';
import logo from '../../assets/image 5.svg';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; 
export default function Nav() {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <div
      className={`fixed top-0 px-[10px] md:px-[40px]  z-10 w-full flex flex-row justify-center gap-[155px] items-center h-[100px] transition-all duration-300 ease-in-out ${
        scroll ? 'bg-[#6F6B6E]' : 'bg-transparent'
      }`}
    >
      <img src={logo} alt="logo" className='w-[187px] h-[90px]' />

    
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white text-3xl pr-10 md:pr-0 ">
          {menuOpen ? <FaTimes className='bg-[#C33AAA]'/> : <FaBars className='text-[#C33AAA]'/>} 
        </button>
      </div>

    
      <ul
        className={`${
          menuOpen ? 'block' : 'hidden'
        } absolute top-[100px] right-0 bg-[#00000060] md: md:bg-[#00000060] md:static md:flex flex-col md:flex-row w-full md:w-[500px] h-auto md:h-[60px] justify-evenly items-center md:rounded-[65px] transition-all duration-300 ease-in-out`}
      >
        <li className='p-2 md:p-0'>
          <NavLink to='/' className='text-[20px] font-roboto font-bold text-white hover:bg-[#6F6B6E] hover:w-[300px] hover:rounded-[65px] px-9 py-4'>
            Home
          </NavLink>
        </li>
        <li className='p-2 md:p-0'>
          <NavLink to='' className='text-[20px] font-roboto font-bold text-white hover:bg-[#6F6B6E] hover:rounded-[65px] px-9 py-4'>
            About Us
          </NavLink>
        </li>
        <li className='p-2 md:p-0'>
          <NavLink to='' className='text-[20px] font-roboto font-bold text-white hover:bg-[#6F6B6E] hover:rounded-[65px] px-9 py-4'>
            Blog
          </NavLink>
        </li>
        <li className='p-2 md:p-0'>
          <NavLink to='./events' className='text-[20px] font-roboto font-bold text-white hover:bg-[#6F6B6E] hover:rounded-[65px] px-5 py-4'>
            Events
          </NavLink>
        </li>
      </ul>

    
      <button className='hidden md:block bg-[#9B2B87] w-[200px] h-[54px] rounded-[20px] text-white font-inter text-[20px] font-semibold'>
        Contact Us
      </button>
    </div>
  );
}