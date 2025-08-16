

import React, {useRef, useState, useEffect} from 'react'
import Image from 'next/image'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
const stories = [
    {
        name: "Sonny Smack",
        src: 'https://links.papareact.com/zof',
        profiles: 'https://links.papareact.com/l4v',
    },
    {
        name: "Elon Musk",
        src: 'https://links.papareact.com/4zn',
        profiles: 'https://links.papareact.com/kxk',
    },
    {
        name: "Jeff Bezoz",
        src: 'https://links.papareact.com/k2j',
        profiles: 'https://links.papareact.com/f0p',
    },
    {
        name: "Mark Sucker",
        src: 'https://links.papareact.com/xql',
        profiles: 'https://links.papareact.com/snf',
    }
]


export default function Stories() {
    
    

  return (
    <div className='relative'>
        <div className='flex relative overflow-x-auto overflow-y-hidden  hide-scrollbar'>
        <div className='relative h-56 w-32 flex-shrink-0  cursor-pointer  rounded-2xl mr-3'>
            <Image 
            src="https://links.papareact.com/4zn" 
            layout='fill'
            alt="Elon Musk"
            objectFit='cover'
            className=' transition-transform duration-300 hover:brightness-80 hover:scale-105 z-10 ' 
            />
            <div className='absolute z-20 h-8 w-8 top-3 left-3 border-2 border-blue-500 rounded-full'>
                <Image
                src='https://links.papareact.com/snf'
                layout='fill'
                alt='profile pic'
                objectFit='cover'
                className='rounded-full '
                />
            </div>
            <div className='absolute z-20 text-white bottom-3 left-3'>
                <h1>Elon Musk</h1>
            </div>
        </div>
        




        
    <div className='relative h-56 w-32 flex-shrink-0 overflow-hidden cursor-pointer  rounded-2xl mr-3'>
            <Image 
            src="https://links.papareact.com/4zn" 
            layout='fill'
            alt="Elon Musk"
            objectFit='cover'
            className=' transition-transform duration-300 hover:brightness-80 hover:scale-105 z-10 ' 
            />
            <div className='absolute z-20 h-8 w-8 top-3 left-3 border-2 border-blue-500 rounded-full'>
                <Image
                src='https://links.papareact.com/snf'
                layout='fill'
                alt='profile pic'
                objectFit='cover'
                className='rounded-full '
                />
            </div>
            <div className='absolute z-20 text-white bottom-3 left-3'>
                <h1>Elon Musk</h1>
            </div>
        </div><div className='relative h-56 w-32 flex-shrink-0 overflow-hidden cursor-pointer  rounded-2xl mr-3'>
            <Image 
            src="https://links.papareact.com/4zn" 
            layout='fill'
            alt="Elon Musk"
            objectFit='cover'
            className=' transition-transform duration-300 hover:brightness-80 hover:scale-105 z-10 ' 
            />
            <div className='absolute z-20 h-8 w-8 top-3 left-3 border-2 border-blue-500 rounded-full'>
                <Image
                src='https://links.papareact.com/snf'
                layout='fill'
                alt='profile pic'
                objectFit='cover'
                className='rounded-full '
                />
            </div>
            <div className='absolute z-20 text-white bottom-3 left-3'>
                <h1>Elon Musk</h1>
            </div>
        </div><div className='relative h-56 w-32 flex-shrink-0 overflow-hidden cursor-pointer  rounded-2xl mr-3'>
            <Image 
            src="https://links.papareact.com/4zn" 
            layout='fill'
            alt="Elon Musk"
            objectFit='cover'
            className=' transition-transform duration-300 hover:brightness-80 hover:scale-105 z-10 ' 
            />
            <div className='absolute z-20 h-8 w-8 top-3 left-3 border-2 border-blue-500 rounded-full'>
                <Image
                src='https://links.papareact.com/snf'
                layout='fill'
                alt='profile pic'
                objectFit='cover'
                className='rounded-full '
                />
            </div>
            <div className='absolute z-20 text-white bottom-3 left-3'>
                <h1>Elon Musk</h1>
            </div>
        </div><div className='relative h-56 w-32 flex-shrink-0 overflow-hidden cursor-pointer  rounded-2xl mr-3'>
            <Image 
            src="https://links.papareact.com/4zn" 
            layout='fill'
            alt="Elon Musk"
            objectFit='cover'
            className=' transition-transform duration-300 hover:brightness-80 hover:scale-105 z-10 ' 
            />
            <div className='absolute z-20 h-8 w-8 top-3 left-3 border-2 border-blue-500 rounded-full'>
                <Image
                src='https://links.papareact.com/snf'
                layout='fill'
                alt='profile pic'
                objectFit='cover'
                className='rounded-full '
                />
            </div>
            <div className='absolute z-20 text-white bottom-3 left-3'>
                <h1>Elon Musk</h1>
            </div>
        </div><div className='relative h-56 w-32 flex-shrink-0 overflow-hidden cursor-pointer  rounded-2xl mr-3'>
            <Image 
            src="https://links.papareact.com/4zn" 
            layout='fill'
            alt="Elon Musk"
            objectFit='cover'
            className=' transition-transform duration-300 hover:brightness-80 hover:scale-105 z-10 ' 
            />
            <div className='absolute z-20 h-8 w-8 top-3 left-3 border-2 border-blue-500 rounded-full'>
                <Image
                src='https://links.papareact.com/snf'
                layout='fill'
                alt='profile pic'
                objectFit='cover'
                className='rounded-full '
                />
            </div>
            <div className='absolute z-20 text-white bottom-3 left-3'>
                <h1>Elon Musk</h1>
            </div>
        </div><div className='relative h-56 w-32 flex-shrink-0 overflow-hidden cursor-pointer  rounded-2xl mr-3'>
            <Image 
            src="https://links.papareact.com/4zn" 
            layout='fill'
            alt="Elon Musk"
            objectFit='cover'
            className=' transition-transform duration-300 hover:brightness-80 hover:scale-105 z-10 ' 
            />
            <div className='absolute z-20 h-8 w-8 top-3 left-3 border-2 border-blue-500 rounded-full'>
                <Image
                src='https://links.papareact.com/snf'
                layout='fill'
                alt='profile pic'
                objectFit='cover'
                className='rounded-full '
                />
            </div>
            <div className='absolute z-20 text-white bottom-3 left-3'>
                <h1>Elon Musk</h1>
            </div>
        </div><div className='relative h-56 w-32 flex-shrink-0 overflow-hidden cursor-pointer  rounded-2xl mr-3'>
            <Image 
            src="https://links.papareact.com/4zn" 
            layout='fill'
            alt="Elon Musk"
            objectFit='cover'
            className=' transition-transform duration-300 hover:brightness-80 hover:scale-105 z-10 ' 
            />
            <div className='absolute z-20 h-8 w-8 top-3 left-3 border-2 border-blue-500 rounded-full'>
                <Image
                src='https://links.papareact.com/snf'
                layout='fill'
                alt='profile pic'
                objectFit='cover'
                className='rounded-full '
                />
            </div>
            <div className='absolute z-20 text-white bottom-3 left-3'>
                <h1>Elon Musk</h1>
            </div>
        </div><div className='relative h-56 w-32 flex-shrink-0 overflow-hidden cursor-pointer  rounded-2xl mr-3'>
            <Image 
            src="https://links.papareact.com/4zn" 
            layout='fill'
            alt="Elon Musk"
            objectFit='cover'
            className=' transition-transform duration-300 hover:brightness-80 hover:scale-105 z-10 ' 
            />
            <div className='absolute z-20 h-8 w-8 top-3 left-3 border-2 border-blue-500 rounded-full'>
                <Image
                src='https://links.papareact.com/snf'
                layout='fill'
                alt='profile pic'
                objectFit='cover'
                className='rounded-full '
                />
            </div>
            <div className='absolute z-20 text-white bottom-3 left-3'>
                <h1>Elon Musk</h1>
            </div>
        </div><div className='relative h-56 w-32 flex-shrink-0 overflow-hidden cursor-pointer  rounded-2xl mr-3'>
            <Image 
            src="https://links.papareact.com/4zn" 
            layout='fill'
            alt="Elon Musk"
            objectFit='cover'
            className=' transition-transform duration-300 hover:brightness-80 hover:scale-105 z-10 ' 
            />
            <div className='absolute z-20 h-8 w-8 top-3 left-3 border-2 border-blue-500 rounded-full'>
                <Image
                src='https://links.papareact.com/snf'
                layout='fill'
                alt='profile pic'
                objectFit='cover'
                className='rounded-full '
                />
            </div>
            <div className='absolute z-20 text-white bottom-3 left-3'>
                <h1>Elon Musk</h1>
            </div>
        </div>


        </div>
        <button  className='absolute z-50 top-22 left-3 bg-white rounded-full p-3 cursor-pointer'>
            <FaChevronLeft className='h-6 w-6 text-gray-500 '/>
        </button>
        <button  className='absolute z-50 top-22 right-3 bg-white rounded-full p-3 cursor-pointer'>
            <FaChevronRight className='h-6 w-6 text-gray-500 '/>
        </button>
    </div>
  )
}
