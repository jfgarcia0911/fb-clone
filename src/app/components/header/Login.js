"use client"
import React from 'react'
import Image from 'next/image'
import {login, logout} from "@/lib/actions/auth";


export default function Login() {
  return (
    <div>
      {/* <Image src="/path/to/image.jpg" alt="Login" width={500} height={500} /> */}


      <button className='bg-blue-500 text-white p-2 rounded' onClick={() => login()}>Sign in With Github </button>


      <button className='bg-blue-500 text-white p-2 rounded' onClick={() => logout()}>Sign out With Github </button>
    </div>
  )
}
  