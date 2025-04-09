import { React, useState } from 'react'
import img7 from '../assets/contact-hero.png'
import { PaystackButton } from 'react-paystack';





const Donate = () => {
    const publicKey = "pk_test_51N2v0aK1x5X3j4q7J6Y8Z9Q9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9";
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const componentProps ={ 
        email,
        amount: amount * 100,
        metadata: {
            name,
            phoneNumber,
        },
        publicKey,
        text: "Donate",
        onSuccess: () => alert("Transaction successful!"),
        onClose: () => alert("Wait! You need this donation!")
    }

  return (


    <div className='h-[100vh] place-content-center flex flex-col xl:flex-row justify-center items-center px-[10px] md:px-20 bg-[#ffffff] gap-10 xl:gap-[180px] md:pb-[40px]  '>
        <div className=' hidden xl:block  place-content-center items-center  xl:items-start w-full xl:w-[422px] h-[635px] space-y-[40px] md:gap-0 px-5 md:px-20 xl:pt-20  rounded-[20px]'>
          

            <img src={img7} alt=""/>
       
        </div>

        <form className='flex flex-col gap-3 xl:gap-7 pb-[10px] xl:px-0'>
            <h2 className='font-bold text-[24px]'>Send us a message</h2>
            <lable className='flex flex-col gap-4 justify-center items-start '>
                <p className='font-normal text-[16px]'>Full name</p>
                <input type='text' placeholder='Akinrinde Joel' required value={name} onChange={(e) => setName(e.target.value)} className=' w-full xl:w-[546px] h-[72px] bg-[#D9D9D9] outline-none  rounded-[10px] px-4 '/>
            </lable>

            <lable className='flex flex-col gap-4 justify-center items-start '>
                <p className='font-normal text-[16px]'>Email address</p>
                <input type='email' placeholder='example123@gmaiol.com' required value={email} onChange={(e) => setEmail(e.target.value)} className='w-full xl:w-[546px] h-[72px] bg-[#D9D9D9] outline-none  rounded-[10px] px-4 '/>
            </lable>

            <lable className='flex flex-col gap-4 justify-center items-start '>
                <p className='font-normal text-[16px]'>Amount</p>
                <input type='text' placeholder='₦ 1000' required value={amount} onChange={(e) => setAmount(e.target.value)} className='w-full xl:w-[546px] h-[72px] bg-[#D9D9D9] outline-none  rounded-[10px] px-4 '/>
            </lable>

            <lable className='flex flex-col gap-4 justify-center items-start '>
                <p className='font-normal text-[16px]'>Phone Number</p>
                <input type='number' placeholder='080685039848' required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className='w-full xl:w-[546px] h-[72px] bg-[#D9D9D9] outline-none  rounded-[10px] px-4 '/>
            </lable>

            <PaystackButton className='w-full xl:w-[546px] h-[72px] bg-[#9B2B87] outline-none text-white  rounded-[10px] px-4 ' {...componentProps} />
             
            
        </form>
    </div>
  )
}

export default Donate;
