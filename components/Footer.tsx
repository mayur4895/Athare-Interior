'use client'
import { Link, animateScroll as scroll } from 'react-scroll';
import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Separator } from './ui/separator';
import { FadeInWhenVisible } from './FadeInvisiible';
import WhatsAppButton from './whatsappbutton';

const Footer = () => {
  return (
    <FadeInWhenVisible   from="bottom"  delay={0.1} > 
    <footer className=" bg-primary text-white py-4">
        
      <div className="container mx-auto text-center">
       
        <div className=" grid  md:grid-cols-3  items-start  place-items-center py-4 justify-ceneter md:justify-between ">
            <div className='  mb-2'>
            <h5 className="font-bold text-3xl">Athare Interior</h5>
        <p className="text-sm ">
          Crafted with love by Athare Interior
        </p>
            </div>
           <div className='flex flex-col items-center gap-2 '>
         
         <Link
        className=' text-nowrap cursor-pointer'
        activeClass="active"
        to="Services"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Services
      </Link>
      

  
         <Link
        className=' text-nowrap cursor-pointer'
        activeClass="active"
        to="Portfolio"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        portfolio
      </Link>
 
      <Link
        className=' text-nowrap cursor-pointer'
        activeClass="active"
        to="aboutus"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        About us
      </Link>
  
         <Link
        className=' text-nowrap cursor-pointer'
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Contact us
      </Link>
 
           </div>
 <Separator className=' md:hidden bg-slate-50/10 my-2'/>
           <div className=' flex    w-full     text-center  justify-center items-center gap-3'>
            <span className=' text-nowrap'>Follow  us</span>
            <WhatsAppButton/>
              <a href='https://www.instagram.com/athareinteriors?igsh=MW51dnQwOGVnb2V0dA==' target='blank'>  <FaInstagram/></a>
              <a href='https://www.facebook.com/athareinteriors?mibextid=ZbWKwL' target='blank'>    <FaFacebookF /></a>
           </div>
        </div>
 
     
      </div>



      <Separator className=' md:hidden bg-slate-50/10 mb-2'/>
      <p className="text-sm  text-center">
          &copy; {new Date().getFullYear()} Athare Interior. All Rights Reserved.
        </p>
    </footer>
 </FadeInWhenVisible>
  );
};

export default Footer;
