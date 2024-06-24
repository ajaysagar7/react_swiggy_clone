import { CategoriesData } from "./CategoriesData";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";




import React, { useEffect } from 'react'

const Category = () => {
  const [slide,setSlide] = useState(0)


  const prevSlide = () => {
    if(slide == 0 ) return false;
    setSlide(slide - 3);

  }


  const nextSlide  = () => {

    if(CategoriesData.length - 8 == slide) return false;
    setSlide(slide + 3);

  }




  return (
    <>
    {/* CATEGORY HEADING */}
    <div className=" max-w-[1200px] flex mx-auto item-center py-5    justify-between" >

        {/* sub heading */}
        <p className="font-bold text-xl text-black">What's on your mind?</p>
        {/* arrow buttons */}
        <div className="flex flex-row gap-4">
        <FaArrowLeft  className="icons h-[30px] w-[30px] rounded-full bg-[#d9d4d4] p-2" onClick={prevSlide} />
        <FaArrowRight  className="icons h-[30px] w-[30px] rounded-full bg-[#d9d4d4] p-2" onClick={nextSlide}/>

        </div>
    </div>
    {/* CATEGORY LIST WIDGET */}
    <div className="w-max-[1200px] flex px-10 pb-4  overflow-hidden">
      {CategoriesData.map((category,index) => {
        return (
          <div key={index} className="category-item duration-500 shrink-0" style={{transform:`translateX(-${slide * 100}%)`}} >
          <img  className="w-[150px] rounded-md" src={category.image} alt={category.name} />
          </div>
        
        );
      })}
    </div>
   
  
     
    {/* CATEGORY HORIZONTAL LIST */}
    </>
  )
}

export default Category