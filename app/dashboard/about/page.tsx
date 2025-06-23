"use client"

import React from 'react'
import Image from 'next/image';
import { Icon } from '@iconify/react';

const About = () => {
  return (
     <div id='about' className=" mt-20 md:mt-0 flex flex-col items-center justify-center h-screen w-full bg-white  ">
      <div className=' flex flex-col items-center justify-center gap-9 '>
        <div className='flex flex-col items-center justify-center gap-2 '>
      <h1 className='text-2xl font-bold '>&lt; About Me /&gt;</h1>
      <h3 className=' text-gray-600'>My Introduction</h3>
      </div>
          <div className='flex flex-col md:flex-row items-center justify-center gap-20 p-10'>
            <Image
              src="/assets/rklee.png"
              alt="Harikaran"
              width={100}
              height={100}
              className='border-4 border-purple-100 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105'
            />
            <div className='flex flex-col items-center md:items-start justify-center gap-7'>
              <p className='w-96 text-base text-center md:text-justify'>I&#39;m a Software Engineering Student & Full-stack JS developer with 1 years of experience. I specialize in creating high-quality web applications.</p>
               <ul className='text-pink-600 font-semibold pl-8 md:pl-2 '>
                <li>🚀 I deliver client-focused solutions.</li>
                <li>⚡ I&#39;m a web developer Freelancer.</li>
                <li>🔥 I love sharing programming tips.</li>
               </ul>

               <div className='flex flex-row  gap-10 items-center justify-center text-center pl-10 md:pl-0'>
                <div>
                  <h2 className='font-bold'>01+</h2>
                  <p>years</p>
                  <p>experiece</p>
                </div>
                <div>
                  <h2 className='font-bold'>15+</h2>
                  <p>Completed</p>
                  <p>projects</p>
                </div>
                <div>
                  <h2 className='font-bold'>02</h2>
                  <p>Companies</p>
                  <p>Intern</p>
                </div>
               </div>
               
                 <a href="/assets/harikaran_resume.pdf" download className='  h-12 bg-pink-600 text-white font-bold px-4 py-2  rounded-md hover:bg-pink-700 transition duration-300 flex gap-2 items-center'>
                    Download CV <span className='hover:animate-ping'><Icon icon="line-md:download-loop" width="24" height="24" /></span>   </a>
            </div>
            </div>  
        </div>
        </div>
  )
}

export default About 