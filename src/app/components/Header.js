import React from 'react'
import Image from 'next/image'
import { BellIcon, ChatBubbleLeftIcon,ChevronDownIcon,HomeIcon,UserGroupIcon,ViewGridIcon } from '@heroicons/react/24/solid'
import { FlagIcon, PlayIcon, MagnifyingGlassIcon , ShoppingCartIcon } from '@heroicons/react/24/outline'
import HeaderIcon from './HeaderIcon'

export default function Header() {
  return (
    <div className='flex items-center'>
        {/* Left */}
        <div className='flex items-center'>
          <Image src="https://links.papareact.com/5me" alt="Logo" width={40} height={40} layout='fixed'/>

          <div className='flex bg-gray-100 rounded-full p-2 '>
            <MagnifyingGlassIcon className='h-6 text-gray-600' />
            {/* Search Input */}
            <input  className='ml-2 items-center outline-none' type='text' placeholder='Search Facebook'/>
          </div>
        </div>


        {/* Center  */}
        <div className='flex justify-center flex-grow '>
            <div className='flex space-x-6 md:space-x-2'>
                <HeaderIcon Icon={HomeIcon} />
                <HeaderIcon Icon={FlagIcon} />
                <HeaderIcon Icon={PlayIcon} />
                <HeaderIcon Icon={ShoppingCartIcon} />
                <HeaderIcon Icon={UserGroupIcon} />  
            </div>
        </div>


        {/* Right */}

    </div>
  )
}
