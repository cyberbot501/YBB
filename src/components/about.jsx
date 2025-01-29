import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import founder from '../assets/founder.svg';

export default function About() {
  const [showMore, setShowMore] = useState(false); 

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='bg-[#00000030] px-[25px] md:px-[40px] flex flex-col justify-center items-center overflow-x-hidden'>
      <div className='md:w-[1200px] w-[100%] h-[53px] md:gap-48 bg-[40px] gap-3 bg-[#6F6B6E] my-[20px] flex flex-row justify-center items-center rounded-[30px]'>
        <NavLink className='font-roboto font-semibold text-white text-[12px] md:text-[21px]'>About FNFEE</NavLink>
        <NavLink className='font-roboto font-semibold text-white text-[12px] md:text-[21px]'>Mission & Vision</NavLink>
        <NavLink className='font-roboto font-semibold text-white text-[12px] md:text-[21px]'>Leadership</NavLink>
      </div>

      <h1 className='font-roboto font-bold text-[#6F6B6E] md:text-[26px] pb-5 md:pb-10'>ABOUT <span className='text-[#9B2B87]'>FNFEE</span></h1>

      <div className='flex flex-col md:flex-row justify-center gap-12 items-center md:items-start'>
        <img src={founder} alt="Founder" className='md:w-[605px] h-[500px] md:h-[920px]' />


        <p className='md:w-[540px] w-[100%] text-[16px] text-center md:text-start font-inter font-normal text-[#353334] hidden md:block'>Founded and registered by Oluwaseun Kola Akinola in 2024, and with headquarter in Ado Ekiti, Ekiti State; Nigeria we are committed to empowering women by providing resources in technology, gender advocacy, and personal development. 
                Our mission is aligned with the United Nations Sustainable Development Goals (SDGs), particularly Goals 5, 4, and 8, to create a safe, inclusive space where women can embrace their identity, grow personally and professionally, and break free from societal limitations.
                <br /> <br />
                BYT is a non-profit organization devoted to empowering women through personal growth, self-discovery, and transformation. We provide a safe and supportive space for women to rebuild their sense of self-worth, explore their identity, and achieve personal and professional success.
                <br /> <br />
                Since our founding, we have positively impacted the lives of over 2,000 women through various conferences, webinars, and virtual events. Our community is home to nearly 100 active members who participate in our programs, and support each other on their journey toward self-empowerment, including gender advocacy.
                <br /> <br />
                Our initiatives cover essential areas such as mental health, financial independence, creativity, and self-expression. Through the Women Identity Conference, we help women redefine their identities and build self-confidence. We also offer mental health workshops and financial independence webinars to equip women with the tools they need to navigate life’s challenges and gain financial control. In addition, we celebrate the power of creativity as a form of healing and self-expression, encouraging women to explore their passions and talents.
                <br /> <br />
                With a strong commitment to making a lasting difference, we have reached women globally through media and virtual platforms. Our programs have allowed us to create meaningful connections, build a supportive community, and inspire women to embrace their true selves.
                <br /> <br />
                We are continuously evolving and growing, dedicated to transforming the lives of more women by providing resources, education, and opportunities for personal and professional growth.
        </p>


        <p className='md:w-[540px] w-[100%] text-[16px] text-center md:text-start font-inter font-normal text-[#353334] block md:hidden'>
          Founded and registered by Oluwaseun Kola Akinola in 2024, and with headquarter in Ado Ekiti, Ekiti State; Nigeria we are committed to empowering women by providing resources in technology, gender advocacy, and personal development. 
          Our mission is aligned with the United Nations Sustainable Development Goals (SDGs), particularly Goals 5, 4, and 8, to create a safe, inclusive space where women can embrace their identity, grow personally and professionally, and break free from societal limitations.
          
          {/* Hidden paragraphs */}
          {showMore && (
            <>
              <br /> <br />
              BYT is a non-profit organization devoted to empowering women through personal growth, self-discovery, and transformation. We provide a safe and supportive space for women to rebuild their sense of self-worth, explore their identity, and achieve personal and professional success.
              <br /> <br />
              Since our founding, we have positively impacted the lives of over 2,000 women through various conferences, webinars, and virtual events. Our community is home to nearly 100 active members who participate in our programs, and support each other on their journey toward self-empowerment, including gender advocacy.
              <br /> <br />
              Our initiatives cover essential areas such as mental health, financial independence, creativity, and self-expression. Through the Women Identity Conference, we help women redefine their identities and build self-confidence. We also offer mental health workshops and financial independence webinars to equip women with the tools they need to navigate life’s challenges and gain financial control. In addition, we celebrate the power of creativity as a form of healing and self-expression, encouraging women to explore their passions and talents.
              <br /> <br />
              With a strong commitment to making a lasting difference, we have reached women globally through media and virtual platforms. Our programs have allowed us to create meaningful connections, build a supportive community, and inspire women to embrace their true selves.
              <br /> <br />
              We are continuously evolving and growing, dedicated to transforming the lives of more women by providing resources, education, and opportunities for personal and professional growth.
            </>
          )}
        </p>

        {/* Learn More Button */}
        <button
          onClick={handleShowMore}
          className='bg-[#9B2B87] mb-10 w-[200px] h-[54px] rounded-[20px] text-white font-inter text-[20px] font-semibold block md:hidden'
        >
          {showMore ? 'Show Less' : 'Learn More'}
        </button>
      </div>
    </div>
  );
}


