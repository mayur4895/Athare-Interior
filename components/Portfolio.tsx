'use client'
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BentoGrid } from "./ui/bendo-grid-";
import { FadeInWhenVisible } from "./FadeInvisiible";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";

export function Portfolio() {
  const demo = [
    {
      name: "Living Room",
      image: "/living2.jpg", // Replace with actual image URL
      id: "1",
      category: "Residential",
    },
    {
      name: "Office Space",
      image: "/office.jpg", // Replace with actual image URL
      id: "2",
      category: "Commercial",
    },
    {
      name: "Apartment",
      image: "/appartment.jpg", // Replace with actual image URL
      id: "3",
      category: "Residential",
    },
    {
      name: "Shopping Mall",
      image: "/mall.jpg", // Replace with actual image URL
      id: "4",
      category: "Commercial",
    },
    {
      name: "Villa",
      image: "/villa.jpg", // Replace with actual image URL
      id: "5",
      category: "Residential",
    },
    {
      name: "Warehouse",
      image: "/warehouse.jpg", // Replace with actual image URL
      id: "6",
      category: "Commercial",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredDemo, setFilteredDemo] = useState(demo);

  useEffect(() => {
    const filtered = selectedCategory === "All"
      ? demo
      : demo.filter(item => item.category === selectedCategory);
    setFilteredDemo(filtered);
  }, [selectedCategory]);

  return (
    <div className='py-4 px-4 md:px-8 lg:px-16'>
      <div className='flex flex-col items-center justify-center text-center'>
       
        <FadeInWhenVisible from="top" >
          <div className="text-center">
          <h1 className="text-4xl  ">Portfolio</h1>
      
            </div>
</FadeInWhenVisible>
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full max-w-4xl mt-5 bg-white  ">
        <FadeInWhenVisible from="top" delay={0.1} >
          <TabsList className="flex flex-wrap items-center gap-3 justify-center w-full bg-white">
            <TabsTrigger value="All" className="text-sm md:text-base bg-white">All</TabsTrigger>
            <TabsTrigger value="Residential" className="text-sm md:text-base bg-white">Residential</TabsTrigger>
            <TabsTrigger value="Commercial" className="text-sm md:text-base bg-white">Commercial</TabsTrigger>
          </TabsList>
          </FadeInWhenVisible>
          <TabsContent value={selectedCategory} className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDemo.map((item) => (
                        <FadeInWhenVisible key={item.id}  from="top" delay={0.2} > 
                <Card key={item.id} className="shadow-sm transition-opacity duration-500 ease-in-out opacity-0 animate-random-move">
                  <CardHeader className=" pt-2 pb-1">
                    <CardTitle className="text-lg font-medium">{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="mb-0">
                  <AspectRatio ratio={16 / 9} className="bg-muted">
      <Image
     src={item.image} alt={item.name}
        fill
        className="h-full w-full rounded-md object-cover"
      />
    </AspectRatio>
                  </CardContent>
                </Card>
                </FadeInWhenVisible>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
