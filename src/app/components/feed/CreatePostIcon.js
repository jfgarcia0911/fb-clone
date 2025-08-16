import React from 'react'

export default function CreatePostIcon({Icon, title}) {
  return (
    <div className='flex items-center'>
      
      <Icon className='h-6 w-6 mr-2' />
      <p className='text-gray-700'>{title}</p>
    </div>
  )
}
