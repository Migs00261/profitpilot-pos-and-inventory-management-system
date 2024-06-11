import React from 'react'
import Navbar from './_components/navbar'
function PosLayout({children}:{children: React.ReactNode}) {
  return (
    <div className='flex flex-row max-w-screen-xl'>
        <div className="">
            <Navbar></Navbar>
        </div>
        <div className="h-full w-full bg-[#F2F4F8]">
          {children}
          </div>
        </div>
  )
}

export default PosLayout