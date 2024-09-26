'use client'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { TypewriterEffect } from './ui/typewriter-effect'
import { FadeInWhenVisible } from './FadeInvisiible'
import { Link } from 'react-scroll'

const Banner = () => {
  const words = [
    {
      text: "Build",
    },
    {
      text: "Your",
    },
    {
      text: "Space",
    },
    {
      text: "with",
    },
    {
      text: "Us",
   
    },
  ];
  return (
    <div className='relative w-full h-[100vh]' >
      
      <Image 
        src="/Banner.jpg" 
        alt="Banner"
        fill
        style={{ objectFit: 'cover' }}
        className="opacity-90 -z-10 brightness-50"
      />
      <div className=' flex items-center justify-center h-full w-full text-center z-50'>
        <div className='text-white '>
 
        <TypewriterEffect words={words}/>
 
        <FadeInWhenVisible   from="bottom"   > 
        <p className='py-2  md:text-sm lg:text-xl'> Design Your Perfect Space with Athare Interiors</p>
       </FadeInWhenVisible>
        <FadeInWhenVisible   from="bottom"  delay={0.2} > 
        <Link
        className=' text-nowrap'
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}  
      > 
      <Button className="text-white">Free Consultation</Button>
          </Link>
        
        </FadeInWhenVisible>
        </div>
      </div>
    </div>
  )
}

export default Banner
