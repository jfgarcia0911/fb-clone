"use client";

import React, {useState} from 'react'
import Image from 'next/image'
import { FaBell } from "react-icons/fa";
import { BsMessenger, BsGrid3X3GapFill } from "react-icons/bs";
import { logout } from '@/lib/auth';
import Link from 'next/link';

export default function NavbarRight({session}) {

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
            
            {session?.user ? 
            <>
            <Image
              className='h-9 w-9 rounded-full'
              src={session?.user?.image || '/default-avatar.png'}
              alt="Profile Pic"
              width={30}
              height={30}
            /> 
            <button onClick={logout}>Sign Out</button> 
            </>
            :
            
            <Link href={`/auth/signin`} >Sign In</Link> }
            
    </>
  )
}
