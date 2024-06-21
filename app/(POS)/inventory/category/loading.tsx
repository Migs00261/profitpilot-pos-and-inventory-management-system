import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"
function Loading() {
  return (
    <div className='space-y-4 m-4 '>
        <div className="">
            <Skeleton>
                <div className="w-full h-[100px] rounded"></div>
            </Skeleton>
        </div>
        <div className="">
            <Skeleton>
                <div className="w-full h-[100px] rounded"></div>
            </Skeleton>
        </div>
        <div className="">
            <Skeleton>
                <div className="w-full h-[100px] rounded"></div>
            </Skeleton>
        </div>
        <div className="">
            <Skeleton>
                <div className="w-full h-screen rounded"></div>
            </Skeleton>
        </div>
    </div>
  )
}

export default Loading