'use client'
import React from 'react'
import { Skeleton } from '@nextui-org/react'
function TableLoading() {
  return (
  
        <div className="">
           <Skeleton>
               <div className="w-full h-[100px] bg-default-300"></div>
              
           </Skeleton>
        </div>
   
  )
}

export default TableLoading