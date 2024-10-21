import React from 'react'

export const Navbar = () => {
  return (
    <>
    <nav>
        <div className='flex justify-center items-center content-center py-3 '>
            <div className='bg-white w-96 h-14 rounded-xl border-black '>
                <ul className='flex justify-center gap-8  py-4'>
                    <li className='text-white font-medium hover:text-xl transition-all '>Portfolia</li>
                    <li className='text-white font-medium hover:text-xl transition-all'>Experiance</li>
                    <li className='text-white font-medium  hover:text-xl transition-all'>Contact Us</li>
                    <li className='text-white font-medium hover:text-xl transition-all'>Skill</li>
                </ul>
            </div>
        </div>
    </nav>
    
    </>
  )
}
