import Image from 'next/image'
import React from 'react'
import { PiDotOutlineDuotone } from 'react-icons/pi'

const AboutUs = () => {
  return (
 
        <section className="backgroundSection  container grid place-items-center w-full relative h-full  mt-20 py-20 " id="about-us" >
          {/* <div>
            <Image src={" "} alt='img' height={800} width={800} className=' fixed top-0 left-0'/>
          </div> */}
 <div className='text-center'> 
 <h1 className="text-4xl">About Us</h1> 
      <p className=' mt-2 text-gray-800 text-sm'>At ATHARE INTERIORS, we design spaces that reflect you. <br /> Our passionate  team is dedicated to creating unique, functional environments that inspire.
        </p>
 </div>


        <div className=' mt-14  grid md:grid-cols-2 items-start justify-start gap-2 w-full'>
 <div className='flex flex-col items-center justify-center w-full'>
 <div className=' h-60 w-full text-center items-center'>
 <Image src={"/logo2.png"} className='text-center' alt={"logo"} height={300} width={300}/>
 </div>

  <p className='  text-sm '>
  Founded by Ganesh Athare in 2018, ATHARE INTERIORS brings 
creative and inspiring designs to life. Ganesh keen eye for detail 
and commitment to blending creativity with functionality make every project 
a true reflection of your vision.
  </p>
 </div>


<div className=' flex flex-col gap-2'>  
 <div>
 <h2 className='font-medium text-primary'>Our Mission</h2> 
 <p className=' text-sm'>
 We deliver personalized, innovative, and functional 
designs that exceed expectations. Our goal is to make
 the design process enjoyable and stress-free while
  building lasting relationships.
 </p>
 </div>

 
 <div>

 <h2 className='font-medium text-primary'>Our Values</h2> 

 <li className=" flex items-start justify-start gap-2 text-sm">   Creativity: Pushing boundaries and exploring new ideas.</li>
 <li className=" flex items-start justify-start gap-2 text-sm">   Integrity: Operating with transparency and professionalism. </li>
 <li className=" flex items-start justify-start gap-2 text-sm">   Collaboration : Working closely with clients and partners for seamless execution.</li>
 <li className=" flex items-start justify-start gap-2 text-sm">   Sustainability
  : Prioritizing eco-friendly practices.</li>
   
  </div>


 <div>
 <h2 className='font-medium text-primary'>What Sets Us Apart</h2> 
 
 <li className=" flex items-start justify-start gap-2 text-sm"> <div> <PiDotOutlineDuotone  size={17}  className="text-gray-600" /></div>Personalized attention </li>
 <li className=" flex items-start justify-start gap-2 text-sm"> <div> <PiDotOutlineDuotone  size={17}  className="text-gray-600" /></div>Customized design solutions </li>
 <li className=" flex items-start justify-start gap-2 text-sm"> <div> <PiDotOutlineDuotone  size={17}  className="text-gray-600" /></div>Exceptional customer service </li>
 <li className=" flex items-start justify-start gap-2 text-sm"> <div> <PiDotOutlineDuotone  size={17}  className="text-gray-600" /></div>Commitment to sustainability</li>
   
 </div>

</div>
        </div>
    </section>
  )
}

export default AboutUs
