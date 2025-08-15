import React from 'react'
import Image from 'next/image.js';
import { useSession } from 'next-auth/react';
import { FaUserFriends } from "react-icons/fa";
import SidebarIcon from './SidebarIcon.js'
import { HiUserGroup    } from "react-icons/hi2";
import { GiShoppingBag } from "react-icons/gi";
import { FaTv } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";


export default function Sidebar() {

  const {data: session} = useSession()
console.log(session)
  return (
    <div className='hidden md:inline-flex p-6 bg-gray-300  w-[300px] '>
       
       <div className='mt-3'>
        <div className='flex items-center mb-6'>
          <Image
            src={session?.user?.image || '/default-avatar.png'}
            alt="Profile"
            width={24}
            height={24}
            className="mr-2 rounded-full cursor-pointer transition duration-300 hover:brightness-95 "
          />
          <span className='capitalize'>{session?.user?.name}</span>
        </div>
        <div className='flex items-center mb-6'>
          <SidebarIcon Icon={FaUserFriends} title='Friends'/>
        </div>
        <div className='flex items-center mb-6'>
          <SidebarIcon Icon={HiUserGroup} title='Groups'/>
        </div>
        <div className='flex items-center mb-6'>
          <SidebarIcon Icon={GiShoppingBag} title='Marketplace'/>
        </div>
        <div className='flex items-center mb-6'>
          <SidebarIcon Icon={FaTv} title='Watch'/>
        </div>
        <div className='flex items-center mb-6'>
          <SidebarIcon Icon={FaRegCalendarAlt} title='Events'/>
        </div>
        <div className='flex items-center mb-6'>
          <SidebarIcon Icon={FaClock} title='Memories'/>
        </div>
        <div className='flex items-center mb-6'>
          <SidebarIcon Icon={FaChevronDown} title='See more'/>
        </div>
       </div>
    </div>
  )
}


// 1:42