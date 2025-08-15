import React from 'react'

export default function SidebarIcon({Icon, title}) {
  return (
    <>
    <div className='text-blue-500'>
      <Icon className='h-6 w-6 mr-2'/>
    </div>
    <span>{title}</span>
    </>
  )
}
