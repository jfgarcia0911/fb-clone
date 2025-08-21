import React from 'react'

export default function Login() {
  return (
    <div className='flex  justify-center mt-30'>
      <div className='flex flex-col lg:flex-row items-center  w-250 h-100'>
        <div className='bg-white w-125 text-center lg:text-left'>
            <h1 className='text-blue-500 font-bold text-5xl mb-2'>facebook</h1>
            <p className='font-medium text-lg'>Connect with friends and the world around you on Facebook.</p>
        </div>
        <div className='bg-white w-125 mt-10'>
            <div className='flex flex-col items-center border border-gray-300 w-98 mx-auto rounded-lg shadow-xl'>
              <h2 className="text-2xl font-semibold mb-4 ">Sign In</h2>
              <form className='flex flex-col '>
                  <input type='email' placeholder='Email or Phone Number' className='border border-gray-300 w-90 p-3 rounded-md mb-3'/>
                  <input type='password' placeholder='Password' className='border border-gray-300 w-90 p-3 rounded-md mb-3'/>
                  <div className='text-center bg-blue-600 text-white text-xl font-bold p-3 rounded-md '>
                    Log In
                  </div>
              </form>
              <div className='p-3 pb-5 text-blue-700 text-sm border-b border-gray-300 w-90 text-center'>Forgot account?</div>
              <div className='w-50 text-center text-white text-md p-3 my-6 rounded-md font-bold bg-green-500 transition-colors'>Create New Account</div>
            </div>
            <div className='text-center mt-6'><span className='font-bold'>Create a Page</span> for a celebrity, band or business.</div>
        </div>
      </div>
    </div>
  )
}
