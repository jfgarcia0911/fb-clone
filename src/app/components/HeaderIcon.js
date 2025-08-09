import React from 'react'

export default function HeaderIcon({Icon, active}) {
  return (
    <>
       {<Icon className={`size-7 hover:text-blue-500 sm:h-7 mx-auto ${active && 'text-blue-500'}   `} />}
      </>  
  )
}
{/* <div className='flex items-center cursor-pointer px-2 sm:px-2  md:px-10  hover:bg-gray-100  active:border-b-2 active:border-blue-500 group'></div> */}