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
    <div className=' p-6    '>
       <div className='flex relative flex-col  mt-3'>        
        <div className='flex  mb-6'>
          <div className='flex items-center text-gray-900 h-7 w-7 mr-3'>
            <Image
            src={session?.user?.image || '/default-avatar.png'}
            alt="Profile"
            width={35}
            height={35}
             className='object-cover  mx-auto rounded-full'/>
          </div>
          <span className='capitalize lg:hidden xl:inline-flex text-md font-semibold'>{session?.user?.name}</span>
        </div>
        <div className='flex items-center mb-7'>
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
        <div className='flex  mb-6'>
          <div className='flex items-center text-gray-900 h-7 w-7 mr-3'>
            <FaChevronDown className='h-4 w-4 mx-auto'/>
          </div>
          <span className='lg:hidden xl:inline-flex text-md font-semibold'>See more</span>
        </div>
       </div>
    </div>
  )
}


// 1:42