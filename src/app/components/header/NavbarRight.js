"use client";

import React, {useState, useEffect, useRef} from 'react'
import Image from 'next/image'
import { FaBell } from "react-icons/fa";
import { BsMessenger, BsGrid3X3GapFill } from "react-icons/bs";
import { logout } from '@/lib/auth';
import Link from 'next/link';
import { MdLogout } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoMdHelpCircle } from "react-icons/io";
import { PiSignIn } from "react-icons/pi";


export default  function NavbarRight({session}) {
  const dropdownRef = useRef(null);

  
  
  const [isOpen, setIsOpen ] = useState(false)
  const [activeIcon, setActiveIcon] = useState('');
  const icons = [
      {id: 'grid', Icon: BsGrid3X3GapFill },
      {id: 'messenger', Icon: BsMessenger },
      {id: 'bell', Icon: FaBell }
    ]

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
      {/* Profile Pic  */}
      {icons.map(({id, Icon}) => {
        return (
          <div key={id} className={`bg-gray-200 p-2 rounded-full hover:bg-gray-300 cursor-pointer ${activeIcon===id && `text-blue-500`}`} onClick={() => setActiveIcon(prev => prev === id ? null : id)}>
            <Icon className='h-6 w-6 ' />
          </div>
        )
    })}
            
           

      <div onClick={() => setIsOpen(!isOpen)} className="relative inline-block group     " ref={dropdownRef}>
        <div className='relative h-10 w-10'>
          {/* Image */}
        <Image
          src={session?.user?.image || '/default-avatar.png'}
          alt="Profile"
          width={40}
          height={40}
          className=" rounded-full cursor-pointer transition duration-300 hover:brightness-95"
        />
        </div>
 
      {/* Dropdown menu */}
      <div  className={`${isOpen? 'block' : 'hidden'} absolute right-0 p-2 mt-2 w-60 bg-gray-50 border border-gray-200 rounded-md shadow-lg transition-opacity duration-200`}>
        <div className='flex items-center p-2 mt-1 border-b border-gray-300 '>
          <div className='mr-2'>
            <Image
          src={session?.user?.image || '/default-avatar.png'}
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full cursor-pointer transition duration-300 hover:brightness-95"
          />
          </div>
          <div className='text-xl font-semibold capitalize'>
            {session?.user.name}
          </div>
        </div>
        <ul className="p-2 text-sm text-gray-700">
          
          {session?.user? 
          <>
          <li className=" flex items-center px-4 py-2 rounded-lg hover:bg-gray-300 cursor-pointer">
            <div className='bg-gray-300 rounded-full p-1 mr-2'>
              <IoSettings className='h-6 w-6  mx-auto'/>
            </div>
            <span >Settings & privacy</span> 
          </li>
          <li className=" flex items-center px-4 py-2 rounded-lg hover:bg-gray-300 cursor-pointer">
            <div className='bg-gray-300 rounded-full p-1 mr-2'>
              <IoMdHelpCircle className='h-6 w-6  mx-auto'/>
            </div>
            <span >Help & support</span> 
          </li>
          <li onClick={logout} className=" flex items-center px-4 py-2 rounded-lg hover:bg-gray-300 cursor-pointer group">
            <div className='bg-gray-300 rounded-full p-1 mr-2'>
              <MdLogout className='h-6 w-6  mx-auto'/>
            </div>
            <span >Sign Out</span> 
          </li>
          </>
          :
          <li className=" flex items-center px-4 py-2 rounded-lg hover:bg-gray-300 cursor-pointer">
            <Link className='flex items-center' href={`/auth/signin`}>
            <div className='bg-gray-300 rounded-full p-1 mr-2'>
              <PiSignIn className='h-6 w-6  mx-auto'/>
            </div>
            <span  >Sign In</span>
            </Link>
          </li>
          }
        </ul>
      </div>
    </div>
            
    </>
  )
}
