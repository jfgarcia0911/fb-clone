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
    // <div className=' flex items-center justify-between py-2 w-full shadow-md '>
    //     {/* Left */}
    //     <div className='relative flex items-center md:min-w-30 lg:min-w-75 ml-3'>
    //         <NavbarLeft />
    //     </div>

    //     {/* Center  */}
    //     <div className='flex  items-center justify-center md:min-w-20 lg:min-w-150  text-gray-500'>
    //         <div className='hidden md:flex justify-between md:space-x-15  lg:space-x-30'>
    //           {icons.map(({ id, Icon }) => (
    //             <div key={id} onClick={() => setActiveIcon(id)}>
    //               <HeaderIcon Icon={Icon} active={activeIcon === id} />
    //             </div>
    //           ))}
    //         </div>            
    //     </div>

    //     {/* Right */}
    //     <div className='flex items-center space-x-2 md:min-w-30  mr-3  lg:min-w-75 justify-end text-gray-800'>
    //         <NavbarRight session={session}/>
    //     </div>
    // </div>

    <div className=' grid grid-cols-2 md:grid-cols-5 items-center justify-between py-2  shadow-md '>
        {/* Left */}
        <div className='col-span-1 relative flex items-center  ml-3 '>
            <NavbarLeft />
        </div>

        {/* Center  */}
        <div className='col-span-2 order-3 md:order-none md:col-span-3 flex  items-center justify-center   text-gray-500'>
            <div className='flex justify-between px-4 w-full md:w-100 lg:w-150'>
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
