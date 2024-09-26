
'use client'
import { Component, useState } from 'react';
 
import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Separator } from "@/components/ui/separator"

  import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Grip } from "lucide-react";
 

import { Link, animateScroll as scroll } from 'react-scroll';
import QuoteDiloag from './Consultation-dilog';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import WhatsAppButton from './whatsappbutton';
import { UserButton } from '@clerk/nextjs';

 
 
 

     const  Header  = ()=> {
      const [isopen,setisopen] = useState(false);
    return ( 
      <> 
      <Menubar className="p-8   fixed top-0 left-0 w-full z-50 font-thin justify-between items-center flex border-b-0">
     
   

      <div className="    flex  w-full     md:justify-center justify-between    ">
      <span className=' md:hidden  block'>     ATHAREINTERIORS</span>
        <div suppressHydrationWarning className='md:flex gap-3 hidden'> 
            <MenubarMenu>
                <MenubarTrigger  className="  hover:text-primary cursor-pointer   font-normal ">
                  
                <Link
                className=' text-nowrap '
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Home
            </Link>
                  </MenubarTrigger> 
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger className="  hover:text-primary cursor-pointer font-normal" >
                  
                <Link
                className=' text-nowrap '
              activeClass="active"
              to="Services"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              Services
            </Link>
                  </MenubarTrigger> 
              </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger className="  hover:text-primary cursor-pointer font-normal" > 
              <Link
              className=' text-nowrap '
            activeClass="active"
            to="Portfolio"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Portfolio
          </Link>
          </MenubarTrigger> 
            </MenubarMenu>


        <MenubarMenu>
          
          <Link
          className=' text-nowrap '
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <Image src={"/logo.png"} alt='logo' height={60} width={60}/>
      </Link>
      
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="  hover:text-primary cursor-pointer font-normal">  
          <Link
          className=' text-nowrap '
        activeClass="active"
        to="about-us"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
         About Us
      </Link>
          </MenubarTrigger> 
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="  hover:text-primary cursor-pointer font-normal"  >  
          <Link
          className=' text-nowrap '
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        Contact Us
      </Link>
          </MenubarTrigger> 
        </MenubarMenu>   

        <MenubarMenu> 
         
         
         <QuoteDiloag/> 
        
        </MenubarMenu> 


        <MenubarMenu> 
         
         
   
        
        </MenubarMenu> 
    
    </div>
             
       
  
    <MenubarMenu> 
      <Sheet open={isopen} onOpenChange={setisopen}> 
      <SheetTrigger className="font-semibold  md:hidden block mr-4"> <Grip /></SheetTrigger>
      
      <SheetContent>
        <SheetHeader className="mb-8 flex gap-4 flex-row">
        
          <SheetTitle  className="flex gap-2 items-center">  Athare interiors
          </SheetTitle>  
        </SheetHeader>
        <Separator />
          <div className="flex flex-col gap-5 items-start mt-4"> 

          <MenubarMenu>
                      
     <Link
     className=' text-nowrap '
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-10}
        duration={500}
      >
          <MenubarTrigger  className="  hover:text-primary cursor-pointer   font-normal "  onClick={()=>{setisopen(false)}}> 
        Home 
            </MenubarTrigger> 
            </Link>
        </MenubarMenu>
        <MenubarMenu>
        <Link
        className=' text-nowrap '
        activeClass="active"
        to="Services"
        spy={true}
        smooth={true}
        offset={-60}
        duration={500}
      >
          <MenubarTrigger className="  hover:text-primary cursor-pointer font-normal" onClick={()=>{setisopen(false)}}> 
         Services
 
            </MenubarTrigger> 
            </Link>
        </MenubarMenu>
        <MenubarMenu>
        <Link
        className=' text-nowrap '
        activeClass="active"
        to="Portfolio"
        spy={true}
        smooth={true}
        offset={-60}
        duration={500}
      >
          <MenubarTrigger className="  hover:text-primary cursor-pointer font-normal" onClick={()=>{setisopen(false)}}> 
        Portfolio
      
      </MenubarTrigger> 
      </Link>
        </MenubarMenu>

        <MenubarMenu>
                
        <Link
        className=' text-nowrap '
        activeClass="active"
        to="about-us"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
          <MenubarTrigger className="  hover:text-primary cursor-pointer font-normal" onClick={()=>{setisopen(false)}}>

       
        About Us
  
          </MenubarTrigger>
          </Link>  
        </MenubarMenu>

        <MenubarMenu>
        <Link
        className=' text-nowrap '
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}  
      >
          <MenubarTrigger className="  hover:text-primary cursor-pointer font-normal"  onClick={()=>{setisopen(false)}}>  
      
        Contact Us
 
          </MenubarTrigger> 
          </Link>
        </MenubarMenu>  


        <MenubarMenu>  
         
         <QuoteDiloag/>  
        </MenubarMenu> 
     
           <Separator />
           <span className=' px-2 text-nowrap '>Follow us</span> 
           <div className=' px-2 flex    w-full     text-start    items-center gap-3'>
              <WhatsAppButton/>
              <a href='https://www.instagram.com/athareinteriors?igsh=MW51dnQwOGVnb2V0dA==' target='blank'>  <FaInstagram/></a>
              <a href='https://www.facebook.com/athareinteriors?mibextid=ZbWKwL' target='blank'>    <FaFacebookF /></a>  
           </div>
      </div>


</SheetContent>

</Sheet>

        </MenubarMenu> 
        </div>
     
    <UserButton/>
       
      </Menubar>
  
 
 </>
      
    )
  }
  

  export default Header;