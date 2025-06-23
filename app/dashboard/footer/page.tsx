"use client"

import Link from 'next/link';
import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
    const time = new Date().getFullYear();
    return(
        <div id='footer' className='flex  md:mb-0 items-center justify-center h-auto md:h-56 w-full text-white bg-black  gap-10 p-10 mt-30 md:mt-0'>
            <div className='flex flex-col  items-center justify-center gap-6 w-full max-w-6xl'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-6 w-full max-w-6xl'>
                <div className='flex flex-col  justify-center gap-6'>
                    <h1 className='text-2xl font-bold text-pink-600'>Harikaran</h1>
                    <h2>Full Stack Developer</h2>

                    <div className='flex flex-row  gap-10 ' >
                  <Link href="https://www.linkedin.com/in/harikaran-r-29553121a/" className="    hover:text-pink-600 hover:-translate-y-3/12 transition-all duration-300" target='_blank'><Icon icon="basil:linkedin-outline" width="24" height="24" /></Link>
                  <Link href="https://github.com/Harikaran1212" className="  hover:text-pink-600 hover:-translate-y-3/12 transition-all duration-300" target='_blank'><Icon icon="uil:github-alt" width="24" height="24" /></Link>
                  <Link href="https://www.cloudskillsboost.google/public_profiles/161c87ab-19f9-4b6a-b6d1-4f77ebb0cc19" className="  hover:text-pink-600 hover:-translate-y-3/12 transition-all duration-300" target='_blank'><Icon icon="uim:google" width="24" height="24" /></Link>
                  <Link href="https://dribbble.com/hari1212" className="  hover:text-pink-600 hover:-translate-y-3/12 transition-all duration-300" target='_blank'><Icon icon="icon-park-outline:dribble" width="24" height="24" /></Link>
                  <Link href="https://www.facebook.com/share/1653xihyo2/" className="  hover:text-pink-600 hover:-translate-y-3/12 transition-all duration-300" target='_blank'><Icon icon="icon-park-twotone:facebook" width="24" height="24" /></Link>
            </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <ul className='flex flex-row flex-wrap gap-10 items-center  md:text-lg   md:w-[500px] justify-center md:justify-start'>
                        <li>
                            <Link href="/#home" className=' font-medium hover:text-pink-600 hover:-translate-y-3/12 transition-all duration-300'>Home</Link>
                        </li>
                         <li>
                            <Link href="/#about" className=' font-medium hover:text-pink-600 hover:-translate-y-3/12 transition-all duration-300'>About</Link>
                        </li>
                         <li>
                            <Link href="/#services" className=' font-medium hover:text-pink-600 hover:-translate-y-3/12 transition-all duration-300'>Services</Link>
                        </li>
                         <li>
                            <Link href="/#skills" className='font-medium hover:text-pink-600 hover:-translate-y-3/12 transition-all duration-300'>Skills</Link>
                        </li>
                         <li>
                            <Link href="/#qualification" className='font-medium hover:text-pink-600 hover:-translate-y-3/12 transition-all duration-300'>Qualification</Link>
                        </li>
                         <li>
                            <Link href="/#projects" className='font-medium hover:text-pink-600 hover:-translate-y-3/12 transition-all duration-300'>Projects</Link>
                        </li>
                         <li>
                            <Link href="/#contact" className='font-medium hover:text-pink-600 hover:-translate-y-3/12 transition-all duration-300'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
               <p className=''>© {time}-Designed and Developed by Harikaran ❤️</p>
            </div>
            </div>

        </div>
    )
}

export default Footer;