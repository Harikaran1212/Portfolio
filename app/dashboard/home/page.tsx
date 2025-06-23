"use client"

import Link from 'next/link';
import React from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const HomePage   = () => {
    useEffect(() => {
        AOS.init({ duration: 800 });
      }, []);
    return (
        <div id='home' data-aos="fade-down-right"  className="flex  items-center justify-center h-screen w-full bg-white gap-10 p-10">
            <div className='flex flex-col  gap-10 ' >
                  <Link href="https://www.linkedin.com/in/harikaran-r-29553121a/" className="    text-pink-600 hover:-translate-y-3/12 transition-all duration-300" target='_blank'><Icon icon="basil:linkedin-outline" width="24" height="24" /></Link>
                  <Link href="https://github.com/Harikaran1212" className="  text-pink-600 hover:-translate-y-3/12 transition-all duration-300" target='_blank'><Icon icon="uil:github-alt" width="24" height="24" /></Link>
                  <Link href="https://www.cloudskillsboost.google/public_profiles/161c87ab-19f9-4b6a-b6d1-4f77ebb0cc19" className="  text-pink-600 hover:-translate-y-3/12 transition-all duration-300" target='_blank'><Icon icon="uim:google" width="24" height="24" /></Link>
                  <Link href="https://dribbble.com/hari1212" className="  text-pink-600 hover:-translate-y-3/12 transition-all duration-300" target='_blank'><Icon icon="icon-park-outline:dribble" width="24" height="24" /></Link>
                  <Link href="https://www.facebook.com/share/1653xihyo2/" className="  text-pink-600 hover:-translate-y-3/12 transition-all duration-300" target='_blank'><Icon icon="icon-park-twotone:facebook" width="24" height="24" /></Link>
            </div>
            
            <div className='flex flex-col items-center justify-center gap-5'>
                <Image
                    src="/assets/chatgpt.png"
                    alt="Harikaran" 
                    width={200}
                    height={200}
                    className=' mt-18 w-[280px] h-auto border-1 border-black  rounded-t-full shadow-2xl hover:shadow-md transition-shadow duration-300 transform hover:scale-105'
               />
                    <h1 className='text-3xl md:text-5xl font-bold'>Hi, I&#39;m Harikaran</h1>
                    <p className='hover:bg-pink-300 duration-1000 text-center md:text-2xl font-semibold text-pink-600'>&lt; Software Engineering Student &amp; Full-stack JS Developer /&gt;</p>
                     <div className='flex flex-row gap-4 items-center'>
                        <Link href="/#contact" className='h-12 bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition duration-300 flex gap-2 items-center'>
                            Get in Touch <Icon icon="proicons:send" width="24" height="24"  className='hover:animate-ping'/>
                        </Link>
                        <Link href="/#about" className='flex items-center gap-2 text-gray-500 hover:translate-y-2 transition-all duration-300'>
                           <Icon icon="bi:mouse" width="24" height="24" />Scroll Down<Icon icon="iconoir:nav-arrow-down" width="24" height="24" />
                        </Link>
                     </div>
            </div>
        </div>
    )
}

export default HomePage;    
