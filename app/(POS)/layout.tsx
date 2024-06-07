import React from 'react'
import Navbar from './_components/navbar'
function PosLayout({children}:{children: React.ReactNode}) {
  return (
    <div className='flex flex-row'>
        <div className="">
            <Navbar></Navbar>
        </div>
        <div className="">{children}</div>
        </div>
  )
}

export default PosLayout