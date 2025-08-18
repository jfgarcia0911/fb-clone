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
  return (
    <div className=' p-6    '>
       <div className='flex relative flex-col  mt-3'>        
        <div className='flex  mb-6 cursor-pointer group'>
          <div className='flex relative items-center text-gray-900 h-8 w-8 mr-3 p-1 rounded-full group-hover:bg-gray-300'>
            <Image
            src={session?.user?.image || '/default-avatar.png'}
            alt="Profile"
            fill
            sizes="32px"
             className='object-cover  mx-auto rounded-full'/>
          </div>
          <span className='capitalize lg:hidden xl:inline-flex text-md font-semibold'>{session?.user?.name}</span>
        </div>
          <SidebarIcon Icon={FaUserFriends} title='Friends'/>
          <SidebarIcon Icon={HiUserGroup} title='Groups'/>
          <SidebarIcon Icon={GiShoppingBag} title='Marketplace'/>
          <SidebarIcon Icon={FaTv} title='Watch'/>
          <SidebarIcon Icon={FaRegCalendarAlt} title='Events'/>
          <SidebarIcon Icon={FaClock} title='Memories'/>
        <div className='flex  mb-6 cursor-pointer group ml-1'>
          <div className='flex items-center  p-2 text-gray-900 h-8 w-8  rounded-full  group-hover:bg-gray-300'>
            <FaChevronDown className='h-4 w-4 '/>
          </div>
          <span className='lg:hidden xl:inline-flex text-md font-semibold ml-3'>See more</span>
        </div>
       </div>
    </div>
  )
}


// 1:42