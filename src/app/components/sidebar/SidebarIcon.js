import React from 'react'

export default function SidebarIcon({Icon, title}) {
  return (
    <>
    <div className='text-blue-500'>
      <Icon className='h-7 w-7 mr-3'/>
    </div>
    <span className=' lg:hidden xl:inline-flex text-md font-semibold'>{title}</span>
    </>
  )
}
