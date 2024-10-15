import React from 'react'
import kola from '../assets/kola.svg'
import felix from '../assets/felix.svg'
import esther from '../assets/esther.svg'
import ileri from '../assets/ileri.svg'
import precious from '../assets/precious.svg'
import image1 from '../assets/pop.svg'
import image2 from '../assets/faq.svg'
import image3 from '../assets/wri.svg'
import image4 from '../assets/part.svg'

export default function ourlearders() {

    const values = [
        { title: kola, name:'Oluwaseun Kola Akinola', role: 'FOUNDER'},
        { title: felix, name:'Felix O Ajifowobaje ', role: 'CHAIRMAN TRUSTEE'},
        { title: esther, name:'Esther Ademoroti', role: 'BOARD MEMBER'},
        { title: kola, name:'Kola', role: 'ADVISORY BOARD MEMBER'},
        { title: precious, name:'Precious.A Akinyede', role: 'SECRETARY'},
        { title: ileri, name:'Ayomide Ilori', role: 'BYT COMMUNITY MANAGER'}
        ]

    const faq = [
        {image: image1},
        {image: image2},
        {image: image3},
        {image: image4}
    ]
          
  return (
    <div className='px-[20px] md:px-[40px] overflow-hidden pt-2 pb-10 bg-[#00000020] flex flex-col justify-center items-center '>
        <h2 className='md:pl-14 md:pb-10 font-bold font-inter'>OUR LEADERSHIP TEAM</h2>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 gap-x-16 pb-10'>
        {values.map((item, index) => (
                <div key={index} className='flex flex-col justify-center items-center gap-5'>
                    <img src={item.title} alt="" className='w-[180px] h-[180px] border-[6px] bg-white border-white '/>
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className='font-normal font-roboto text-[20px] '>{item.name}</h2>
                        <p className='font-light font-inter text-[16px]'>{item.role}</p>
                    </div>
                </div>
        ))}
        </div>

        <div className='w-[1200px] md:h-[258px] bg-[#6F6B6E] overflow-hidden flex flex-col justify-center items-center'>
            <h2 className='text-white font-roboto font-normal text-[23px] py-5 md:py-0 md:mt-14'>RELATED LINKS</h2>
            <div className='flex flex-col md:flex-row'>
                {faq.map((item, index) => (
                    <img key={index} src={item.image} alt="" className='md:w-[300px] md:h-[218px] cursor-pointer'/>
                ))}
            </div>
        </div>
    </div>
  )
}
