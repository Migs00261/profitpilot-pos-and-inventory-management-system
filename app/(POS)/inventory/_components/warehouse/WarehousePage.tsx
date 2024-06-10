import React from 'react'
import ThirdTab from './ThirdTab'
import TableComponent from './table/table'
import InventoryNavbarComponent from '@/app/(POS)/_components/InventoryNavbarComponent'
import LocationTab from '@/app/(POS)/_components/LocationTab'
import SidebarNavWarehouseDrawer from './SidebarNavWarehouseDrawer'

export default function WarehousePage() {
  return (
    <div>

      <div className="">
        <InventoryNavbarComponent path='Warehouse'></InventoryNavbarComponent>
      </div>

      <div className="">
        <LocationTab Location="Warehouse"></LocationTab>
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
        <SidebarNavWarehouseDrawer></SidebarNavWarehouseDrawer>
      </div>


      
      

    </div>
  )
}
