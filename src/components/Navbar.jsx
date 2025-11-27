import React from 'react'

const Navbar = () => {
  return (
    <div className=' absolute inset-0 z-10 w-full' >
        <div className='w-full flex justify-center'>
            <div className='container py-7 flex justify-between items-center'>
                <a href="/" className='font-semibold text-2xl'>Rupz Web</a>

                <ul className='flex items-center gap-12'>
                    <a href="">About </a>
                    <a href="">Demo</a>
                    <a href="" className='text-orange px-5 py-2 border-2 bg-transparent border-orange rounded-full  font-semibold  hover:bg-orange hover:text-white'>Code Repo</a>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar