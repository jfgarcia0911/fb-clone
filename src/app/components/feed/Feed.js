import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import CreatePost from './CreatePost'
export default function Feed() {
  return (
    <div className='w-170 '>
      {/* Create Post */}
      <div className='bg-white rounded-2xl'>
        <CreatePost/>
      </div>
      {/* Stories */}
      <div className='  '>
        <Stories/>
      </div>
      <div className='bg-white rounded-2xl shadow-lg'>
        <Posts/>
      </div>
    </div>
  )
}
