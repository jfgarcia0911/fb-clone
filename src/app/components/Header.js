import React from 'react'
import Image from 'next/image'
import { BellIcon, ChatBubbleLeftIcon,ChevronDownIcon,HomeIcon,UserGroupIcon,ViewGridIcon } from '@heroicons/react/24/solid'
import { FlagIcon, PlayIcon, MagnifyingGlassIcon , ShoppingCartIcon, Squares2X2Icon } from '@heroicons/react/24/outline'
import HeaderIcon from './HeaderIcon'
import { HiOutlineFlag,HiUserGroup    } from "react-icons/hi2";
import { ImHome } from "react-icons/im";
import { IoPlayOutline } from "react-icons/io5";
import { BsShop,BsGrid3X3GapFill,BsMessenger   } from "react-icons/bs";
import { FaBell } from "react-icons/fa";


export default function Header() {
  return (
    <div className=' flex items-center justify-between   shadow-md  w-full'>
        {/* Left */}
        <div className='flex items-center min-w-75'>
          <Image src="https://links.papareact.com/5me" alt="Logo" width={40} height={40} layout='fixed'/>

          <div className='flex bg-gray-100 rounded-full p-2 '>
            <MagnifyingGlassIcon className='h-6 text-gray-600' />
            {/* Search Input */}
            <input  className='ml-2 items-center outline-none' type='text' placeholder='Search Facebook '/>
          </div>
        </div>


        {/* Center  */}
        <div className='flex  items-center justify-center md:min-w-75 lg:min-w-150  text-gray-500'>
            <div className='hidden md:flex justify-between md:space-x-10  lg:space-x-20'>
                <HeaderIcon active Icon={ImHome} />
                <HeaderIcon Icon={HiOutlineFlag } />
                <HeaderIcon Icon={IoPlayOutline} />
                <HeaderIcon Icon={BsShop} />
                <HeaderIcon Icon={HiUserGroup  } />
            </div>
        </div>


        {/* Right */}
        <div className='flex items-center space-x-6  min-w-75 justify-end text-gray-800'>
            {/* Profile Pic  */}
            <HeaderIcon Icon={BsGrid3X3GapFill  } />
            <HeaderIcon Icon={BsMessenger  } />
            <HeaderIcon Icon={FaBell  } />
            <Image
              className='h-10 w-10 rounded-full'
              src="/profile-pic.png"
              alt="Profile Pic"
              width={40}
              height={40}
            />
        </div>

    </div>
  )
}
