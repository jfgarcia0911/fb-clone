'use client'

import React from 'react'
import { useSession } from 'next-auth/react'
import Image  from 'next/image'
import { ImFileVideo } from "react-icons/im";
import { MdPhotoLibrary } from "react-icons/md";
import { TfiVideoClapper } from "react-icons/tfi";
import CreatPostIcon from './CreatePostIcon'


export default function CreatePost() {

  const {data: session} = useSession()
  return (
    <div>
      <div className=' border-b border-gray-100 rounded-xl my-3 py-3 text-gray-700'>
        <div className=' flex items-center ml-3 mb-3 '>
          <div className='mr-3'>
            <Image
              src={session?.user?.image || '/default-avatar.png'}
              alt="Profile"
              width={50}
              height={50}
              className="  rounded-full cursor-pointer transition duration-300 hover:brightness-95"
            />
          </div>
          <input type='text' placeholder={`What's on your mind, ${session?.user.name || 'friend'}?`} className='text-lg w-full outline-none focus:outline-none  rounded-lg pl-2 mr-4'/>
          
        </div>
        <div className='flex items-center justify-evenly '>
          <div className='text-red-600'>
            <CreatPostIcon Icon={ImFileVideo} title={'Live video'} />
          </div>
          <div className='text-green-600'>
            <CreatPostIcon Icon={MdPhotoLibrary} title={'Photo/video'} />
          </div>
          <div className='text-red-400'>
            <CreatPostIcon Icon={TfiVideoClapper} title={'Reel'} />
          </div>
        </div>
      </div>
    </div>
  )
}
