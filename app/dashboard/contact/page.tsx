"use client"

import React from 'react';
import { Icon } from '@iconify/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Contact = () => {

   useEffect(() => {
          AOS.init({ duration: 800 });
        }, []);

    return(
         <div  id='contact'  className=" mt-20 md:mt-0 flex flex-col items-center justify-center h-screen w-full bg-white  ">
      <div className=' flex flex-col items-center justify-center gap-9 '>
        <div className='flex flex-col items-center justify-center gap-2 '>
      <h1 className='text-2xl  font-bold '>&lt; Contact Me /&gt;</h1>
      <h3 className=' text-gray-600'>Get In Touch</h3>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center gap-15 md:gap-20 w-full max-w-4xl p-4'>
        <ul className='flex flex-col  md: gap-6 md:gap-8'>
            <li className='flex flex-row items-center   gap-4'>
              <Icon icon="proicons:call" width="36" height="36" className='text-pink-600' />
                <div>
                    <h2 className='font-semibold text-lg'>Call Me</h2>
                    <p className='text-gray-600'>+91 9843627312</p>
                </div>
            </li>
            <li className='flex flex-row items-center gap-4'>
              <Icon icon="proicons:mail" width="36" height="36" className='text-pink-600'/>
                <div>
                    <h2 className='font-semibold text-lg'>Call Me</h2>
                    <p className='text-gray-600'>harikaranrk2003@gmail.com</p>
                </div>
            </li>
            <li className='flex flex-row items-center gap-4'>
              <Icon icon="lucide:map-pin" width="36" height="36" className='text-pink-600 ' />
                <div>
                    <h2 className='font-semibold text-lg'>Location</h2>
                    <p className='text-gray-600'>India-Tamil Nadu</p>
                </div>
            </li>
        </ul>
        <div>
        <form action="" className='flex flex-col  gap-4 md:gap-8'>
            <ul className='flex flex-col md:flex-row md:items-center justify-center gap-4 flex-wrap'>
              <li className=''>
                 <label>Full Name</label>
            <input type="text" placeholder='Your name' className='text-stone-500 focus:text-violet-600 focus:bg-pink-200 bg-pink-100 rounded-md p-2 w-full max-w-xs focus:outline-none mt-2' /></li>
            <li>
            <label>Email</label>
            <input type="email" placeholder='Name@gmail.com' className='text-stone-500 focus:text-violet-600 focus:bg-pink-200 bg-pink-100 rounded-md p-2 w-full max-w-xs focus:outline-none mt-2' />

            </li>
            </ul>   
            <div>     
            <label>Message</label>
            <textarea placeholder='Your message' className='text-stone-500 focus:text-violet-600 focus:bg-pink-200 bg-pink-100 rounded-md p-2 w-full mt-2 focus:outline-none h-32' />
           </div>               
              <button type='submit' className='h-12 bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition duration-300 flex gap-2 items-center w-fit'>
                           Send Message  <Icon icon="proicons:send" width="24" height="24"  className='hover:animate-ping'/>
                        </button>
        </form>
        </div>
      </div>

        </div>
        </div>
    )
}

export default Contact;
