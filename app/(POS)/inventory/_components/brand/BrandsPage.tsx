import React from 'react'
import LocationTab from '@/app/(POS)/_components/LocationTab'
import ThirdTab from './ThirdTab'
import TableComponent from './table/table'
import InventoryNavbarComponent from '@/app/(POS)/_components/InventoryNavbarComponent'
import SidebarNavBrand from './SidebarNavBrand'
export default function BrandsPage() {
  return (
    <div>

      <div className="">
        <InventoryNavbarComponent path='Brands'></InventoryNavbarComponent>
      </div>

      <div className="">
        <LocationTab Location="Brands"></LocationTab>
      </div>
      <div className="">
        <ThirdTab></ThirdTab>
      </div>

      <div className="">
        <div className="bg-white w-full p-[16px]">
           <TableComponent></TableComponent>
        </div>
      </div>

      <div>
        <SidebarNavBrand></SidebarNavBrand>
      </div>


      
      

    </div>
  )
}
