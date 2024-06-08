import React from 'react'
import ThirdTab from './ThirdTab'
import TableComponent from './table/table'
import InventoryNavbarComponent from '@/app/(POS)/_components/InventoryNavbarComponent'
import LocationTab from '@/app/(POS)/_components/LocationTab'

export default function CategoryPage() {
  return (
    <div>

      <div className="">
        <InventoryNavbarComponent path='Category'></InventoryNavbarComponent>
      </div>

      <div className="">
        <LocationTab Location="Category"></LocationTab>
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
