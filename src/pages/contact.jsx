import React from 'react'
import Contact from '../components/contact/form'
import Nav from '../layout/nav/nav' 
import heroimg from '../assets/image-removebg-preview - 2025-02-24T133112.391 1.svg'
import Footer from '../layout/footer/footer'

export default function contact() {
  return (
    <div>
      <Nav />
     
      <div className="grid grid-cols-1  lg:grid-cols-2 place-items-center h-[500px] overflow-hidden bg-[#9B2B87]  px-5 md:px-20 xl:pt-20 pt-36">
        <div>
          <img
            src={heroimg}
            alt="heroimg"
            className="md:h-[600px] pl-20 xl:pl-0"
          />
        </div>
        <div  className=" flex flex-col justify-center gap-4 items-center xl:items-start lg:mt-[-200px] xl:pb-0">
          <h1 className="md:text-[40px] text-[32px] text-[white] font-bold md:w-[500px] text-center xl:text-start">
            Contact Us
          </h1>
          <p className="md:text-[26px] text-[20px] text-[white] font-normal md:w-[422px] text-center xl:text-start">
          WE ARE THE LEADING FEMALE COMMUNITY AROUND AFRICA BREAKING BARRIERS AND BUILDING FUTURES FOR WOMEN ACROSS THE WORLD
          </p>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  )
}
