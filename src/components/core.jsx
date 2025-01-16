import React from 'react'
import image1 from '../assets/chart.svg'
import image2 from '../assets/24yes.svg'
import image3 from '../assets/24yes2.svg'

export default function core() {

    const values = [
        { title: 'Empowerment'},
        { title: 'Teamwork'},
        { title: 'Intergrity'},
        { title: 'Inclusivity'},
        { title: 'Collaboration'},
        { title: 'Innovation'},
        { title: 'Leadership'},
        { title: 'Development'}
        ]

  return (
    <div className=' bg-white'>
        <div className='bg-[#00000030] flex flex-col justify-center items-center px-[20px] md:px-[40px] overflow-hidden pt-[20px]'>
        <h2 className='text-[32px] pb-[20px] font-inter font-medium  '>OUR CORE VALUES</h2>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-20 pb-[20px]'>
            {values.map((item, index) => (
                <div key={index} className='bg-[#D9D9D9] shadow w-[300px] md:w-[240px] h-[100px] flex flex-col justify-between items-center '>
                    <p className='pt-5'>{item.title}</p>
                    <div className='w-[100%] h-[27px] bg-[#5D1C51] '></div>
                </div>  
            ))} 
        </div>
        </div>

        <div className='px-[20px] md:px-[40px] overflow-hidden flex flex-col md:flex-col justify-center items-center md:gap-2'>
            <img src={image1} alt="" className='md:w-[600px] md:h-[569px] '/>
            <div className ='px-[20px] md:px-[40px] overflow-hidden flex flex-row md:flex-row justify-center items-center'>
                 <img src={image2} alt="" className='md:w-[600px] md:h-[569px]'/>
                 <img src={image3} alt="" className='md:w-[600px] md:h-[569px]'/>
            </div>
        </div>
    </div>
  )
}
