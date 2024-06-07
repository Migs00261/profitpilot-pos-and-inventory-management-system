import React from 'react'
import BreadCrums from './BreadCrums'
import { UserButton } from '@/components/auth/user-button'
import SecondTab from './SecondTab'
import ThirdTab from './ThirdTab'
import TableComponent from './table/table'

export default function CategoryPage() {
  return (
    <div>

      <div className="flex md:flex-row md:justify-between md:items-center bg-white p-[8px] flex-col gap-2 md:gap-0">
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

      <div className="">
        <div className="bg-white w-full p-[16px]">
           <TableComponent></TableComponent>
        </div>
      </div>


      
      

    </div>
  )
}
