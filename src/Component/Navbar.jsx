import React from 'react'

export const Navbar = () => {
  return (
    <>
    <nav >
        <div className='flex justify-center items-center content-center py-8 '>
            <div className='bg-black w-96 h-auto rounded-xl '>
                <ul className='flex justify-center gap-8 border rounded-xl py-4'>
                    <li className='text-white font-medium cursor-pointer hover:text-cyan-300 transition-all'>Portfolia</li>
                    <li className='text-white font-medium cursor-pointer hover:text-cyan-300 transition-all'>Experiance</li>
                    <li className='text-white font-medium cursor-pointer hover:text-cyan-300 transition-all'>Contact Us</li>
                    <li className='text-white font-medium cursor-pointer hover:text-cyan-300 transition-all'>Skill</li>
                </ul>
            </div>
        </div>
    </nav>
    
    </>
  )
}
