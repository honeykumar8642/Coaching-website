'use client';
import React from 'react';
import Image from 'next/image';
import manlogo  from "../images/manlogo.png";
import herobg from "../images/hero-background.png"
import { BackgroundBeams } from "./ui/background-beams";
import Link from 'next/link';

const Hero = () => {
  return (
    <div  className='relative bg-black min-h-[43rem] flex justify-center items-center flex-row'>
      <div className='absolute -z-0 opacity-30'>
      <Image src={herobg} alt='hero-images' className='h-full w-full '></Image>
     
      </div>
      <BackgroundBeams/>
        <div className='flex items-center justify-evenly min-h-[30rem]  w-full z-50' >
            <div className='h-25rem w-[40%] '>
                <h1 className='text-8xl 
                 text-white font-bold space-x-2
                '>The Future <br /><span className='text-red-600'>Study </span> Point</h1>
                <p className='text-white-400 text-xl  pt-2 line-clamp-5 '>we believe education is the key to unlocking your true potential. Our mission is to guide students on their journey to success by providing personalized learning experiences, expert mentorship, and a nurturing environment.  Join us and take the first step toward a brighter future!</p>
                <div className='flex flex-row item-center justify-center space-x-5 py-7'>

                <Link href="/contact"><button className='text-md bg-red-600 text-white py-2 px-4 rounded-3xl'>Apply Now</button></Link>
                    <Link href="/contact"><button className='text-md bg-[#1a7d85] text-white py-2 px-4 rounded-3xl'>Contact Us</button></Link>
                </div>
            </div>
            <div className='h-30rem w-[40%] '>
                    <Image src={manlogo} alt='hero-images' className='h-[90%] w-[25%] absolute bottom-0 right-20 '></Image>
                    
            </div>
        </div>
    </div>
  )
}

export default Hero