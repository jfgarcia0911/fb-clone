import React from 'react'

export default function HeaderIcon({Icon, active}) {
  return (
    <>
       {<Icon className={`cursor-pointer size-7 hover:text-blue-500 sm:h-7 mx-auto ${active && 'text-blue-500 '}   `} />}
      </>  
  )
}
