import React from 'react'

export default function HeaderIcon({Icon, active}) {
  return (
    <>
       {<Icon className={`cursor-pointer h-7 w-7  hover:text-blue-500   mx-auto ${active && 'text-blue-500 '}   `} />}
      </>  
  )
}
