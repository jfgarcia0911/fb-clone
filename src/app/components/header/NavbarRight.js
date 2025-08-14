"use client";

import React, {useState} from 'react'
import Image from 'next/image'
import { FaBell } from "react-icons/fa";
import { BsMessenger, BsGrid3X3GapFill } from "react-icons/bs";
import { logout } from '@/lib/auth';
import Link from 'next/link';
import { MdLogout } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoMdHelpCircle } from "react-icons/io";


export default  function NavbarRight({session}) {
console.log(session)
  const [isOpen, setIsOpen ] = useState(false)
  const [activeIcon, setActiveIcon] = useState('');
  const icons = [
      {id: 'grid', Icon: BsGrid3X3GapFill },
      {id: 'messenger', Icon: BsMessenger },
      {id: 'bell', Icon: FaBell }
    ]
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
            
           

      <div onClick={() => setIsOpen(!isOpen)} className="relative inline-block group    ">
      {/* Image */}
        <Image
          src={session?.user?.image || '/default-avatar.png'}
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full cursor-pointer transition duration-300 hover:brightness-95"
        />
 
      {/* Dropdown menu */}
      <div className={`${isOpen? 'block' : 'hidden'} absolute right-0 p-2 mt-2 w-60 bg-gray-50 border border-gray-200 rounded-md shadow-lg transition-opacity duration-200`}>
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
          {session.user.name}
        </div>
        <ul className="p-2 text-sm text-gray-700">
          <li className=" flex items-center px-4 py-2 rounded-lg hover:bg-gray-300 cursor-pointer">
            <div className='bg-gray-300 rounded-full p-1 mr-2'>
              <IoSettings className='h-6 w-6  mx-auto'/>
            </div>
            <button >Settings & privacy</button> 
          </li>
          <li className=" flex items-center px-4 py-2 rounded-lg hover:bg-gray-300 cursor-pointer">
            <div className='bg-gray-300 rounded-full p-1 mr-2'>
              <IoMdHelpCircle className='h-6 w-6  mx-auto'/>
            </div>
            <button >Help & support</button> 
          </li>
          {session?.user? 
          <li className=" flex items-center px-4 py-2 rounded-lg hover:bg-gray-300 cursor-pointer">
            <div className='bg-gray-300 rounded-full p-1 mr-2'>
              <MdLogout className='h-6 w-6  mx-auto'/>
            </div>
            <button onClick={logout}>Sign Out</button> 
          </li>
          :
          <li className="px-4 py-2 rounded-lg hover:bg-gray-300 cursor-pointer">
            <Link href={`/auth/signin`} >Sign In</Link>
          </li>
          }
          
        </ul>
      </div>
    </div>
            
    </>
  )
}
