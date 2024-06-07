import React from 'react'
import Navbar from './_components/navbar'
function PosLayout({children}:{children: React.ReactNode}) {
  return (
    <div className='flex flex-row max-w-screen-xl'>
        <div className="">
            <Navbar></Navbar>
        </div>
        <div className="h-screen w-full">
          {children}
          </div>
        </div>
  )
}

export default PosLayout