'use client'
import React from 'react'
import { SyncLoader } from 'react-spinners'
export default function Loading() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <div className="">
            <SyncLoader
            size={80}
            color='#0C87F3'
            aria-label="Loading Spinner"
            data-testid="loader"
            />
        </div>
        
    </div>
  )
}
