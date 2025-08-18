"use client"
import React, {use, useState} from 'react'
import Stories from './Stories'
import Posts from './Posts'
import CreatePost from './CreatePost'

export default function Feed() {

  const [postImage, setPostImage] = useState([])

  const handlePostImage = (newUrl) => {
        setPostImage((prev) => [...prev, newUrl])
        console.log(postImage)
  }
  return (
    <div className='w-170 '>

      {/* Create Post */}
      <div className='bg-white rounded-2xl'>
        <CreatePost onSendImage={handlePostImage}/>
      </div>

      {/* Stories */}
      <div className=' my-4 '>
        <Stories/>
      </div>

      {/* Posts */}

      <div className='bg-white rounded-2xl shadow-lg'>
        <Posts/>
      </div>
    </div>
  )
}
