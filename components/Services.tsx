"use client";
import React from "react";
import { SiBlueprint } from "react-icons/si";
import { TbCarCrane } from "react-icons/tb";
import { PiBuildingsFill } from "react-icons/pi";
import { GrIntegration } from "react-icons/gr";
import { BsBriefcaseFill } from "react-icons/bs";
import { GoProjectRoadmap } from "react-icons/go"; 
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"; 
import { LiaHandshakeSolid } from "react-icons/lia"; 
import { IoHammer } from "react-icons/io5";
import { PiCheck, PiDot, PiDotOutlineDuotone } from "react-icons/pi";
import { FadeInWhenVisible } from "./FadeInvisiible";
const Services = () => {
  return (
    <div
      id="Services"
      className="flex w-full  justify-center items-center flex-col"
    >
      <div className="py-4 mt-8 text-center">
  
        <div className="flex flex-col items-center justify-center">
        <FadeInWhenVisible from="top" >
          <h1 className="text-4xl">Services</h1>
          <p className='mt-2 text-sm   text-gray-600'>
          Transforming Visions into Spaces
        </p>
          </FadeInWhenVisible>
        </div>
 
      </div>

      <div className="flex flex-wrap items-center justify-center gap-5 w-full">
      <FadeInWhenVisible from="top">
      <Card className="p-6  h-[295px] flex flex-col gap-3  w-[400px]    rounded-xl  hover:border-primary/30 shadow-sm  transition-transform duration-300 ease-in-out">
          <div className="p-0 mb-2  pb-2 border-b border-gray-200  w-full flex justify-between   items-center">
            <span className="text-lg font-medium text-gray-800">
            Residential 
            </span>
            <div className="  p-2 rounded-full">
              <PiBuildingsFill size={22} className="text-primary" />
            </div>
          </div>
          <CardContent className="p-0 flex-1 ">
   


       <div className=" flex items-start gap-2 flex-col text-sm">
            <li className=" flex items-start justify-start gap-2"> <div> <PiDotOutlineDuotone  size={17}  className="text-gray-600" /></div> Home Renovation And Remodeling </li>
              <li className=" flex items-start justify-start gap-2">  <div> <PiDotOutlineDuotone  size={17}  className="text-gray-600" /></div>Interior design</li>
              <li className=" flex items-start justify-start gap-2">  <div> <PiDotOutlineDuotone  size={17}  className="text-gray-600" /></div>1/2/3/4 BHK.
              </li>
              <li className=" flex items-start justify-start gap-2">  <div> <PiDotOutlineDuotone  size={17}  className="text-gray-600" /></div>Bunglow Design </li>
              <li className=" flex items-start justify-start gap-2">  <div> <PiDotOutlineDuotone  size={17}  className="text-gray-600" /></div>Villa Design </li>
              <li className=" flex items-start justify-start gap-2">  <div> <PiDotOutlineDuotone  size={17}  className="text-gray-600" /></div> Apartment Design</li>
              <li className=" flex items-start justify-start gap-2">  <div> <PiDotOutlineDuotone  size={17}  className="text-gray-600" /></div>Townhouse Design</li> 
            </div>
          </CardContent>
        </Card>
 </FadeInWhenVisible>


 <FadeInWhenVisible from="top" delay={0.2}>
        <Card className="p-6  h-[295px] flex flex-col gap-3  w-[400px] bg-gradient-to-br  rounded-xl hover:border-primary/30 shadow-sm transform transition-transform duration-300 ease-in-out">
          <div className="p-0 mb-2  pb-2 border-b border-gray-200  w-full flex justify-between   items-center">
            <span className="text-lg font-medium text-gray-800">
            Commercial
            </span>
            <div className="  p-2 rounded-full">
              <BsBriefcaseFill  size={22} className="text-primary" />
            </div>
          </div>
          <CardContent className="p-0 flex-1 ">
          <div className=" flex items-start gap-2 flex-col text-sm">
            <li className=" flex items-start justify-start gap-2"> <div> <PiDotOutlineDuotone  size={17}  className="text-gray-600" /></div> Office design and layout
            </li>
              <li className=" flex items-start justify-start gap-2">  <div> <PiDotOutlineDuotone  size={17}  className="text-gray-600" /></div>Retail store design and display
              </li>
              <li className=" flex items-start justify-start gap-2">  <div> <PiDotOutlineDuotone  size={17}  className="text-gray-600" /></div>Restaurant and bar design

              </li>
              <li className=" flex items-start justify-start gap-2">  <div> <PiDotOutlineDuotone  size={17}  className="text-gray-600" /></div>Hotel and hospitality design
              </li>
              <li className=" flex items-start justify-start gap-2">  <div> <PiDotOutlineDuotone  size={17}  className="text-gray-600" /></div>Healthcare facility design
              </li>

              <li className=" flex items-start justify-start gap-2">  <div> <PiDotOutlineDuotone  size={17}  className="text-gray-600" /></div>Educational institution design

              </li>

              <li className=" flex items-start justify-start gap-2">  <div> <PiDotOutlineDuotone  size={17}  className="text-gray-600" /></div>Corporate branding and signage

              </li>
            </div>
          </CardContent>
        </Card>
      </FadeInWhenVisible>

      <FadeInWhenVisible from="top" delay={0.4}>
        <Card className="p-6  h-[295px] flex flex-col gap-3  w-[400px] bg-gradient-to-br  rounded-xl hover:border-primary/30 shadow-sm transform  transition-transform duration-300 ease-in-out">
          <div className="p-0 mb-2  pb-2 border-b border-gray-200  w-full flex justify-between   items-center">
            <span className="text-lg font-medium text-gray-800">
             Construction 
            </span>
            <div className="  p-2 rounded-full">
              <IoHammer  size={22} className="text-primary" />
            </div>
          </div>
          <CardContent className="p-0 flex-1 ">
     
          <div className=" flex items-start gap-2 flex-col text-sm">
            <li className=" flex items-start justify-start gap-2"> <div> <PiDotOutlineDuotone  size={17}  className="text-gray-600" /></div>Building and development
            </li>
              <li className=" flex items-start justify-start gap-2">  <div> <PiDotOutlineDuotone  size={17}  className="text-gray-600" /></div> Ground-up construction
              </li>
              <li className=" flex items-start justify-start gap-2">  <div> <PiDotOutlineDuotone  size={17}  className="text-gray-600" /></div>Renovations and restorations
              </li>
              <li className=" flex items-start justify-start gap-2">  <div> <PiDotOutlineDuotone  size={17}  className="text-gray-600" /></div>Additions and expansions
              </li>
              <li className=" flex items-start justify-start gap-2">  <div> <PiDotOutlineDuotone  size={17}  className="text-gray-600" /></div>Project management
              </li>
              <li className=" flex items-start justify-start gap-2">  <div> <PiDotOutlineDuotone  size={17}  className="text-gray-600" /></div>Permitting and approvals
  </li>
  <li className=" flex items-start justify-start gap-2">  <div> <PiDotOutlineDuotone  size={17}  className="text-gray-600" /></div>Site planning and development
  </li>
            </div>
          </CardContent>
        </Card>
        </FadeInWhenVisible>
      </div>

 
 


   
      <div className=" mt-5 py-2 flex flex-wrap items-center justify-center gap-5 w-full">
      <FadeInWhenVisible from="top">
        <Card className="h-64 p-6 flex flex-col gap-3  w-[400px]  rounded-xl shadow-sm transform hover:translate-y-1 hover:shadow-md transition-transform duration-300 ease-in-out">
          <div className="p-0 mb-2  pb-2 border-b border-gray-200  w-full flex justify-between   items-center">
            <span className="text-lg font-medium text-gray-800">
            Consultancy basis

            </span>
            <div className=" bg-primary/10  border-primary  border  p-2 rounded-full">
              <SiBlueprint  size={22} className="text-primary" />
            </div>
          </div>
          <CardContent className="p-0 flex-1 ">
            <div className=" flex items-start gap-2 flex-col text-sm">
            <span className=" flex items-start justify-start gap-2">Site Measurements.</span>
              <span className=" flex items-start justify-start gap-2">  <div> <PiCheck  size={17}  className="text-gray-600" /></div>Furniture Layout options.</span>
              <span className=" flex items-start justify-start gap-2">  <div> <PiCheck  size={17}  className="text-gray-600" /></div>Concept presentation to understand your long.
              </span>
              <span className=" flex items-start justify-start gap-2">  <div> <PiCheck  size={17}  className="text-gray-600" /></div>3D designs as per your choice </span>
              
              <span className=" flex items-start justify-start gap-2">  <div> <PiCheck  size={17}  className="text-gray-600" /></div>Color Consultation</span>
            </div>
          </CardContent>
        </Card>
        </FadeInWhenVisible>
        <FadeInWhenVisible from="top" delay={0.2}> 
        <Card className="h-64 p-6 flex flex-col gap-3  w-[400px]  rounded-xl shadow-sm transform hover:translate-y-1 hover:shadow-md transition-transform duration-300 ease-in-out">
          <div className="p-0 mb-2  pb-2 border-b border-gray-200  w-full flex justify-between   items-center">
            <span className="text-lg font-medium text-gray-800">
            Project Management  
            </span>
            <div className=" bg-primary/10  border-primary  border  p-2 rounded-full">
            <GoProjectRoadmap  size={22} className="text-primary" />
            </div>
          </div>
          <CardContent className="p-0 flex-1 ">
            <div className=" flex items-start gap-2 flex-col text-sm">
              <span className=" flex items-start justify-start gap-2">  <div> <PiCheck  size={17}  className="text-gray-600" /></div>Consultancy Services  </span>
              <span className=" flex w-full items-start justify-start gap-2">  <div> <PiCheck  size={17}  className="text-gray-600" /></div>Detailed working drawings - false ceiling, electrical, plumbing, furniture etc.
              </span>
              <span className=" flex items-start justify-start gap-2">  <div> <PiCheck  size={17}  className="text-gray-600" /></div>Material Selection.</span>
              <span className=" flex items-start justify-start gap-2"> <div> <PiCheck  size={17}  className="text-gray-600" /></div> Material suppliers and contractors of your preference! We can assist you, if required.</span>
            </div>
          </CardContent>
        </Card>
        </FadeInWhenVisible>
        <FadeInWhenVisible from="top" delay={0.4}>
        <Card className="h-64 p-6 flex flex-col gap-3  w-[400px]    rounded-xl shadow-sm transform hover:translate-y-1 hover:shadow-md transition-transform duration-300 ease-in-out">
          <div className="p-0 mb-2  pb-2 border-b border-gray-200  w-full flex justify-between   items-center">
            <span className="text-lg font-medium text-gray-800">
            End to end turn-key solution 
            </span>
            <div className=" bg-primary/10   border-primary  border  p-2 rounded-full">
            <GrIntegration   size={22} className="text-primary" />
            </div>
          </div>
          <CardContent className="p-0 flex-1 ">
            <div className=" flex items-start gap-2 flex-col text-sm">
              <span className=" flex items-start justify-start gap-2">  <div> <PiCheck  size={17}  className="text-gray-600" /></div>All of the above services.
              </span>
              <span className=" flex items-start justify-start gap-2">  <div> <PiCheck  size={17}  className="text-gray-600" /></div>Material purchase - only branded. </span>
              <span className=" flex items-start justify-start gap-2">  <div> <PiCheck  size={17}  className="text-gray-600" /></div>Contractor and Vendor management. </span>
              <span className=" flex items-start justify-start gap-2">  <div> <PiCheck  size={17}  className="text-gray-600" /></div>Project management. </span>
              <span className=" flex items-start justify-start gap-2">  <div> <PiCheck  size={17}  className="text-gray-600" /></div> End to end responsibility and accountability. </span>
 
            </div>
          </CardContent>
        </Card>
        </FadeInWhenVisible>
      </div>
    </div>
  );
};

export default Services;
