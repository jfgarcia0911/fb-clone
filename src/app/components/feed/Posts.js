import React from 'react'
import Image from 'next/image'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import { SlLike } from "react-icons/sl";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaRegShareFromSquare } from "react-icons/fa6";

export default function Posts() {
  return (
    <div className='mt-10   relative'>
      {/* Upper Part */}
      <div className='flex relative justify-between p-3'>
        <div className='flex items-center '>
          <div className=' border-2 rounded-full border-blue-500 mr-3'>
          <Image src={'https://links.papareact.com/zof'} 
            alt="Profile"
            width={50}
            height={50}
            className='rounded-full h-10 w-10'
              />
          </div>
          <div>
            <div className='flex flex-col leading-none '>
              <span className='text-lg font-xl'>Name</span>
              <span className='text-md font-small text-gray-500'>Date .</span>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-3 text-gray-500'>
          <HiOutlineDotsHorizontal className='h-7 w-7'/>
          <RiCloseLine className='h-7 w-7'/>
        </div>
      </div>
      {/* Middle Part */}
      <div className='relative h-140 w-full '>
        <Image src={'https://links.papareact.com/k2j'} 
          alt="Profile"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className=' object-cover'
        />
      </div>
      {/* Bottom Part */}
      <div className='border-t  border-gray-400 my-5 mx-3 py-2'>
        <div className='flex items-center justify-evenly relative text-gray-500'>
          <div className='flex text-lg hover:bg-gray-100 w-full py-2 rounded-xl justify-center'>
            <SlLike className='h-6 w-6 mr-2'/>
            <p> Like</p>
          </div>
          <div className='flex text-lg hover:bg-gray-100 w-full py-2 rounded-xl justify-center'>
            <FaRegCommentAlt className='h-6 w-6 mr-2'/>
            <p> Comment</p>
          </div><div className='flex text-lg hover:bg-gray-100 w-full py-2 rounded-xl justify-center'>
            <FaRegShareFromSquare className='h-6 w-6 mr-2'/>
            <p> Share</p>
          </div>
        </div>
      </div>
    </div>
  )
}
