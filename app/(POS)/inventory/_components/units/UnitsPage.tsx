import React from 'react'
import ThirdTab from './ThirdTab'
import TableComponent from './table/table'
import InventoryNavbarComponent from '@/app/(POS)/_components/InventoryNavbarComponent'
import LocationTab from '@/app/(POS)/_components/LocationTab'
import SidebarNavUnitsDrawer from './SidebarNavUnitsDrawer'

export default function UnitsPage() {
  return (
    <div>

      <div className="">
        <InventoryNavbarComponent path="Units"></InventoryNavbarComponent>
      </div>

      <div className="">
        <LocationTab Location="Units"/>
      </div>
      <div className="">
        <ThirdTab></ThirdTab>
      </div>

      <div className="">
        <div className="bg-white w-full p-[16px]">
           <TableComponent></TableComponent>
        </div>
      </div>
      <div className="">
        <SidebarNavUnitsDrawer></SidebarNavUnitsDrawer>
      </div>


      
      

    </div>
  )
}
