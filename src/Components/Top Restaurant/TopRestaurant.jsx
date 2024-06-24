import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { TopRestaurantData } from "./TopRestaurantData";

const TopRestaurant = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="max-w-[1200px] flex mx-auto items-center py-5 justify-between">
        <p className="font-bold text-xl text-black">Top restaurant chains in Hyderabad</p>
        <div className="flex flex-row gap-4">
          <FaArrowLeft onClick={scrollLeft} className="icons h-[30px] w-[30px] rounded-full bg-[#d9d4d4] p-2 cursor-pointer" />
          <FaArrowRight onClick={scrollRight} className="icons h-[30px] w-[30px] rounded-full bg-[#d9d4d4] p-2 cursor-pointer" />
        </div>
      </div>
      <div ref={scrollContainerRef} className="max-w-[1200px] flex gap-5 overflow-x-auto hide-scrollbar scroll-smooth whitespace-nowrap space-x-4 py-2">
      {TopRestaurantData.map((restaurant, index) => (
  <div key={index} className="inline-block w-60 h-40 bg-gray-200 rounded-lg shadow-md px-2 py-2">
    <img src={restaurant.image} alt={restaurant.title} className="image-width object-cover rounded-md" />
    <h3 className="text-lg font-semibold mt-2">{restaurant.title}</h3>
    <p className="text-sm text-gray-600">{restaurant.offer}</p>
  </div>
))}
      </div>
    </>
  );
};

export default TopRestaurant;