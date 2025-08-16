import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import CreatePost from './CreatePost'
export default function Feed() {
  return (
    <div className='w-170 '>
      {/* Create Post */}
      <div>
        <CreatePost/>
      </div>
      {/* Stories */}
      <div className='  '>
        <Stories/>
      </div>
      <div>
        <Posts/>
      </div>
    </div>
  )
}
