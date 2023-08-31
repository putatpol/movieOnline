import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-between  p-4 z-[100] w-full absolute text-white'>
      <h1 className='text-4xl font-bold cursor-pointer'>You<span className='text-lime-600'>DOO</span></h1>
      <div>
        <button className='pr-4'>Sign in</button>
        <button className='bg-lime-600 rounded-3xl cursor-pointer px-6 py-2'>Sign up</button>
      </div>
    </div>
  )
}

export default Navbar
