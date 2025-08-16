import React from 'react'
import Stories from './Stories'

export default function Feed() {
  return (
    <div className=' bg-gray-600 w-170 '>
      <div>Create Post</div>
      {/* Stories */}
      <div className='  overflow-hidden'>
        <Stories/>
      </div>
      <div>Post</div>
    </div>
  )
}
