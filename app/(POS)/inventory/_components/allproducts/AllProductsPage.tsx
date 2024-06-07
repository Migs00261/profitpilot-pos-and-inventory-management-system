import React from 'react'
import BreadCrums from './BreadCrums'
import { UserButton } from '@/components/auth/user-button'
import SecondTab from './SecondTab'
import ThirdTab from './ThirdTab'
export default function AllProductsPage() {
  return (
    <div>

      <div className="flex flex-row justify-between items-center bg-white p-[8px]">
          <div className="">
            <BreadCrums></BreadCrums>
          </div>
          <div>
            <UserButton></UserButton>
          </div>
      </div>

      <div className="">
        <SecondTab></SecondTab>
      </div>
      <div className="">
        <ThirdTab></ThirdTab>
      </div>


      
      

    </div>
  )
}
