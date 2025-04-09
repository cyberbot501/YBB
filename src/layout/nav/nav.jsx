import React, { useState, useEffect } from 'react';
import logo from '../../assets/image 5.svg';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 
export default function Nav() {


  const navigate = useNavigate();
  const handleButton = () => {
    navigate('/contact');
  }


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
      className={`fixed top-0 md:px-[10px] lg:px-[40px]   z-10 w-full flex flex-row justify-between lg:justify-evenly items-center h-[100px] transition-all duration-300 ease-in-out ${
        scroll ? 'bg-[#ffffff] border-b-2 shadow-2xl' : 'bg-transparent'
      }`}
    >
      <img src={logo} alt="logo" className='w-[187px] h-[90px]' />

    
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white text-3xl pr-10 lg:pr-0 ">
          {menuOpen ? <FaTimes className='bg-[#C33AAA]'/> : <FaBars className='text-[#C33AAA]'/>} 
        </button>
      </div>

    
      <ul
        className={`${
          menuOpen ? 'block' : 'hidden'
        } absolute top-[100px] right-0 bg-[#ffffff] shadow-2xl md:shadow-none lg: lg:bg-[#00000060] lg:static lg:flex flex-col lg:flex-row w-full lg:w-[680px] h-auto lg:h-[60px] justify-evenly items-center lg:rounded-[65px] transition-all duration-300 ease-in-out`}
      >
        <li className='p-2 lg:p-0'>
          <NavLink to='/' className='text-[20px] font-roboto font-bold text-[#C33AAA] md:text-white md:hover:bg-[#6F6B6E] hover:w-[300px] hover:rounded-[65px] px-9 py-4'>
            Home
          </NavLink>
        </li>
        <li className='p-2 lg:p-0'>
          <NavLink to="/#about" className='text-[20px] font-roboto font-bold text-[#C33AAA] md:text-white md:hover:bg-[#6F6B6E] hover:rounded-[65px] px-9 py-4'>
            About
          </NavLink>
        </li>
        <li className='p-2 lg:p-0'>
          <NavLink to='/donate' className='text-[20px] font-roboto font-bold text-[#C33AAA] md:text-white md:hover:bg-[#6F6B6E] hover:rounded-[65px] px-9 py-4'>
            Donate
          </NavLink>
        </li>
        <li className='p-2 lg:p-0'>
          <NavLink to='/blog' className='text-[20px] font-roboto font-bold text-[#C33AAA] md:text-white md:hover:bg-[#6F6B6E] hover:rounded-[65px] px-9 py-4'>
            Blog
          </NavLink>
        </li>
        <li className='p-2 lg:p-0'>
          <NavLink to='/events' className='text-[20px] font-roboto font-bold text-[#C33AAA] md:text-white md:hover:bg-[#6F6B6E] hover:rounded-[65px] px-9 py-4'>
            Events
          </NavLink>
        </li>
        <li className='p-2 lg:p-0'>
          <NavLink to='/contact' className='block md:hidden text-[20px] font-roboto font-bold text-[#C33AAA] md:text-white md:hover:bg-[#6F6B6E] hover:rounded-[65px] px-9 py-4'>
            Contact Us
          </NavLink>
        </li>
      </ul>

    
      <button onClick={handleButton} className='hidden lg:block bg-[#9B2B87] w-[200px] h-[54px] rounded-[20px] text-white font-inter text-[20px] font-semibold'>
        Contact Us
      </button>
    </div>
  );
}