"use client"
import React, {use, useState} from 'react'
import CreateStory from './CreateStory'
import Posts from './Posts'
import CreatePost from './CreatePost'
export default function Feed() {

   
  return (
    <div className='w-170'>

      {/* Create Post */}
      <div className='bg-white rounded-2xl'>
        <CreatePost />
      </div>

      {/* Stories */}
      <div className=' my-4 '>
        <CreateStory/>
      </div>

      {/* Posts */}

      <div className='bg-white rounded-2xl shadow-lg'>
        <Posts/>
      </div>
    </div>
  )
}
