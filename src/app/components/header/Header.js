"use client";
import React, { useState } from 'react'
import HeaderIcon from './HeaderIcon'
import { HiOutlineFlag,HiUserGroup    } from "react-icons/hi2";
import { ImHome } from "react-icons/im";
import { MdVideoSettings } from "react-icons/md";
import { BsShop   } from "react-icons/bs";
import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';
import { useSession } from 'next-auth/react';

export default function Header() {

  const {data: session } = useSession();
  const [activeIcon, setActiveIcon] = useState('home');

  const icons = [
    {id: 'home', Icon: ImHome },
    {id: 'flag', Icon: HiOutlineFlag },
    {id: 'play', Icon: MdVideoSettings },
    {id: 'shop', Icon: BsShop },
    {id: 'group', Icon: HiUserGroup }
  ];

  return (
    

    <div className='sticky top-0 z-50  grid grid-cols-2 md:grid-cols-5 items-center bg-white justify-between py-2 border-b border-gray-200 shadow-sm  '>
        {/* Left */}
        <div className='col-span-1 relative flex items-center  ml-3 '>
            <NavbarLeft />
        </div>

        {/* Center  */}
        <div className='col-span-2 order-3 md:order-none md:col-span-3 flex  items-center justify-center   text-gray-500'>
            <div className='flex justify-evenly  md:justify-between px-4 w-full md:w-100 lg:w-150'>
              {icons.map(({ id, Icon }) => (
                <div key={id} onClick={() => setActiveIcon(id)}>
                  <HeaderIcon Icon={Icon} active={activeIcon === id} />
                </div>
              ))}
            </div>            
        </div>

        {/* Right */}
        <div className='col-span-1 flex items-center space-x-2  mr-3   justify-end text-gray-800'>
            <NavbarRight session={session}/>
        </div>
    </div>
  )
}
