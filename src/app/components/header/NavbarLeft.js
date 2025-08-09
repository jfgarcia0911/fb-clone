"use client";
import React, {useState} from 'react'
import Image from 'next/image'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { IoClose } from "react-icons/io5";

export default function NavbarLeft() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <Image src="https://links.papareact.com/5me" alt="Logo" width={40} height={40} layout='fixed' className={`${isOpen ? 'hidden' : 'block'}`}/>
        <FaArrowLeft className={`cursor-pointer h-6 text-gray-600 ${isOpen? 'block' : 'hidden'}`} onClick={()=> setIsOpen(!isOpen)} />

        <div className='flex bg-gray-100 rounded-full p-2 ml-4'>
            <FaMagnifyingGlass className={`h-6 text-gray-600 ${isOpen ? 'hidden' : 'block'}`} />

            {/* Search Input */}
            <input onClick={()=> setIsOpen(true)}  className='ml-2 items-center outline-none '  type='text' placeholder='Search Facebook '/>
        </div>

        {/* Search Bar */}
        <div className={`absolute top-15 left-0 w-[90%] pb-2 border-b  border-gray-300 rounded-sm shadow-[0_10px_12px_rgba(0,0,0,0.2)] ${isOpen ? 'block' : 'hidden'}`} >
            <div className='flex justify-between items-center py-2'>
              <h1 className='text-xl font-semibold'>Recent</h1>
              <h1 className='text-md text-blue-900 font-semibold'>Edit</h1>
            </div>

            {/* Recent Search */}
            <div className='flex items-center justify-between'>
              <div className='flex '>
                <GoClock className='size-6 text-gray-600 mr-5' />
              <h1 className='text-md font-semibold text-gray-800 mr-10'>Tesla Inc</h1>
              </div>
              <div className='flex items-center'>
                <Image className='mr-5 h-10 w-10 rounded-lg' src="/profile-pic.png" alt="Profile Pic" width={50} height={50} />
              <IoClose className='text-gray-600 ml-2 cursor-pointer' />
              </div>
            </div>
        </div>
    </>
  )
}
