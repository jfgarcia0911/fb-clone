import React from 'react'

export default function HeaderIcon({Icon}) {
  return (
    <div className='flex items-center cursor-pointer  md:px-10 sm:h-14 hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500'>
       {<Icon className='h-5 ' />}
    </div>
  )
}
