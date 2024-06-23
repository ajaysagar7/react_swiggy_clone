import React, { useState } from 'react'
import { IconBase } from 'react-icons';
import { IoIosSearch } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { CgPokemon } from "react-icons/cg";
import { IoMdPerson } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi";




import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const Header = () => {

    const [toggle,setToggle] = useState(false);


    const handleToggle = () => {

        setToggle((prev) => !prev);
    }

    const hideToggle = (e) => {
        setToggle(false);
    }


    const navItems = [
        {
            name:"Search",
            icon: <IoIosSearch />,
        },
        {
            name : "Offers",
            sup: "New",

            icon: <BiSolidOffer />,
        },
        {
            name:"Help",
            icon: <CgPokemon />,
        },
        {
            name:"Account",
            icon: <IoMdPerson />,
        },
        {
            name:"Cart",
            sup : "5",
            icon: <HiOutlineShoppingCart />,
        }
    ];


  return (
    <>
    {/* SIDEBAR */}
    <div className="w-full h-full fixed black-overlay duration-500" onClick={hideToggle} style={
        {opacity: toggle ? 1 : 0,visibility: toggle ? 'visible' : 'hidden'}
    }>
        {/* SIDEBAR DIV */}
        <div className="h-full w-1/4 bg-white absolute  duration-[400ms]" style={{left : toggle ? "0%" : "-100%"}} onClick={(e) => e.stopPropagation()}>
        </div>
    </div>
    {/* HEADER */}
    <header className="logo flex items-center w-full shadow-xl py-5">
            <img src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png" alt="Logo" className='w-[100px]' />
            {/* NAV ITEMS */}
            <div className="navitems flex item-center justify-between w-[1200px]">
                {/* ADDRESS */}
                <div className='flex gap-2 items-center'>
                    <p className='font-semibold text-black underline underline-offset-3 text-[0.9rem]'>Falaknama </p>
                    <p className='font-medium text-grey text-[0.9rem] '>Hallow Agencies</p>
                    <MdOutlineKeyboardArrowDown  className='text-[orange] font-bold text-xl cursor-pointer hover:text-orage-300' onClick={handleToggle}  />

                </div>
                {/* TABS */}
                <div className="nav-tabs flex  gap-10  ">
                    {
                        navItems.map((item,index ) => {
                            return (
                                <li key={index} className="navitem text-md flex gap-1 items-center text-gray hover:text-[orange] duration-100 hover:cursor-pointer">
                                   <p className="text-md font-bold">  {item.icon }</p>
                                    <p>{item.name} <sup className='text-[orange] text-semibold'>{item.sup}</sup> </p>
                                </li>
                            )
                        })
                    }
                </div>
            </div>
        </header>
    </>
  )
}

export default Header