"use client";
import React, {useState,useEffect, useRef} from 'react'
import Image from 'next/image'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { useSession } from 'next-auth/react';
export default function NavbarLeft() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const {data: session} = useSession()

    // Close the dropdown when clicking outside of it
    useEffect(() => {
    function handleClickOutside(event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [setIsOpen]);


  return (
    <> 
        <Image src="https://links.papareact.com/5me" alt="Logo" width={40} height={40}  className={`${isOpen ? 'hidden' : 'block'}`}/>
        <FaArrowLeft className={`cursor-pointer h-6 text-gray-600 ${isOpen? 'block' : 'hidden'} z-100`} onClick={()=> setIsOpen(!isOpen)} />
        <div ref={dropdownRef}>

        <div className='z-1  flex    rounded-full p-2 ml-2 '>
            <FaMagnifyingGlass className={`h-6 text-gray-600 ${isOpen ? 'hidden' : 'block'}`} />

            {/* Search Input */}
            <input onClick={()=> setIsOpen(true)}  className='  ml-2 items-center outline-none placeholder:invisible placeholder:lg:visible'  type='text' placeholder='Search Facebook '/>
        </div>

        {/* Search Bar */}
        {/* <div className={`absolute z-10 bg-white  top-0 -left-3 w-[300px] pb-2    rounded-sm shadow-[4px_8px_12px_-6px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`} > */}
        <div className={`absolute z-10 bg-white  top-0 -left-3 w-[300px] pb-2 border-gray-300 border-b shadow-2xl   rounded-sm  transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`} >

            <div className='flex justify-between items-center py-2 mt-15 mx-3'>
              <h1 className='text-xl font-semibold'>Recent</h1>
              <h1 className='text-md text-blue-500 '>Edit</h1>
            </div>

            {/* Recent Search */}
            <div>
              <div className='flex items-center justify-between mx-4 mb-3'>
               <div className='flex items-center'>
                  <div className='relative items-center text-gray-900 h-9 w-9 mr-3'>
                  <Image
                  src={session?.user?.image || '/default-avatar.png'}
                  alt="Profile"
                  fill
                  className=' rounded-md object-cover '/>
                </div>
                <div className='flex flex-col w-48 leading-5'>
                  <h1 className='text-md font-semibold text-gray-800 text-wrap  line-clamp-2'>Tesla awfawf awfaw fawfaw segseg egseg fawfawfawf Inc</h1>
                  {/* For notification */}
                  <div className='hidden text-sm'>9+ new </div>
                </div>
                </div> 
                <div className='flex items-center'>
                  
                  <IoClose className='text-gray-600 ml-2 cursor-pointer' />
                </div>              
              </div>

              <div className='flex items-center justify-between mx-4 mb-3'>
               <div className='flex items-center'>
                  <div className='relative items-center text-gray-900 h-9 w-9 mr-3'>
                  <Image
                  src={session?.user?.image || '/default-avatar.png'}
                  alt="Profile"
                  fill
                  className=' rounded-md object-cover'/>
                </div>
                <div className='flex flex-col w-48 leading-5'>
                  <h1 className='text-md font-semibold text-gray-800 text-wrap  line-clamp-2'>Tesla awfawf awfaw fawfaw segseg egseg fawfawfawf Inc</h1>
                  {/* For notification */}
                  <div className='hidden text-sm'>9+ new </div>
                </div>
                </div> 
                <div className='flex items-center'>
                  
                  <IoClose className='text-gray-600 ml-2 cursor-pointer' />
                </div>              
              </div>

             
            </div>
        </div>
      </div>
        
    </>
  )
}
