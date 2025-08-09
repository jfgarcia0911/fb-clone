"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import { BellIcon, ChatBubbleLeftIcon,ChevronDownIcon,HomeIcon,UserGroupIcon,ViewGridIcon } from '@heroicons/react/24/solid'
import { FlagIcon, PlayIcon, MagnifyingGlassIcon , ShoppingCartIcon, Squares2X2Icon } from '@heroicons/react/24/outline'
import HeaderIcon from './HeaderIcon'
import { HiOutlineFlag,HiUserGroup    } from "react-icons/hi2";
import { ImHome } from "react-icons/im";
import { IoPlayOutline } from "react-icons/io5";
import { BsShop,BsGrid3X3GapFill,BsMessenger   } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import NavbarLeft from './NavbarLeft';

export default function Header() {
  const [activeIcon, setActiveIcon] = useState('home');

  const icons = [
    {id: 'home', Icon: ImHome },
    {id: 'flag', Icon: HiOutlineFlag },
    {id: 'play', Icon: IoPlayOutline },
    {id: 'shop', Icon: BsShop },
    {id: 'group', Icon: HiUserGroup }
  ];

  return (
    <div className=' flex items-center justify-between py-2 w-full shadow-md '>
        {/* Left */}
        <div className='relative flex items-center md:min-w-30 lg:min-w-75 ml-3'>
            <NavbarLeft />
        </div>


        {/* Center  */}
        <div className='flex  items-center justify-center md:min-w-20 lg:min-w-150  text-gray-500'>
            <div className='hidden md:flex justify-between md:space-x-10  lg:space-x-20'>
              {icons.map(({ id, Icon }) => (
                <div key={id} onClick={() => setActiveIcon(id)}>
                  <HeaderIcon Icon={Icon} active={activeIcon === id} />

                </div>

              ))}
            </div>
        </div>


        {/* Right */}
        <div className='flex items-center space-x-2 md:min-w-30  mr-3  lg:min-w-75 justify-end text-gray-800'>
            {/* Profile Pic  */}
            <div className='bg-gray-200 p-2 rounded-full hover:bg-gray-300'>
              <BsGrid3X3GapFill className='h-6 w-6' />
            </div>
            <div className='bg-gray-200 p-2 rounded-full hover:bg-gray-300'>
              <BsMessenger className='h-6 w-6' />
            </div>
            <div className='bg-gray-200 p-2 rounded-full hover:bg-gray-300'>
              <FaBell className='h-6 w-6' />
            </div>
            
            <Image
              className='h-9 w-9 rounded-full'
              src="/profile-pic.png"
              alt="Profile Pic"
              width={30}
              height={30}
            />
        </div>

    </div>
  )
}
