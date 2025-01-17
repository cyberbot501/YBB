import React from 'react'

export default function login() {
  return (
    <div className='items-center justify-center flex content-center h-[100vh] bg-[#e9e7e7] '>
    <form className=' border-[1px] border-[white] bg-[white]  w-[600px] h-[350px] items-center justify-center flex flex-col place-content-center rounded-[20px] shadow-2xl gap-7 '>
        <label htmlFor="">
            <p className='text-center font-climate font-normal text-[20px] '>Username</p>
            <input type="text" name="" id="" className='w-[300px] h-[40px] rounded-[10px] shadow-2xl outline-none px-8 text-center bg-[#e9e7e7]'/>
        </label>
        <label htmlFor="">
            <p className='text-center  font-climate font-normal text-[20px]  '>Password</p>
            <input type="password" name="" id="" className='w-[300px] h-[40px] rounded-[10px] shadow-2xl outline-none px-8 text-center bg-[#e9e7e7] ' />
        </label>

       <button className='hidden md:block bg-[#9B2B87] w-[200px] h-[54px] rounded-[20px] text-white font-inter text-[20px] font-semibold'> Login </button>
    </form>
    </div>
  )
}
