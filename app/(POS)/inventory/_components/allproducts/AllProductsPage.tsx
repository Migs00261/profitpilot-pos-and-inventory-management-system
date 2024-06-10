import React from 'react'
import LocationTab from '@/app/(POS)/_components/LocationTab'
import ThirdTab from './ThirdTab'
import TableComponent from './table/table'
import InventoryNavbarComponent from '@/app/(POS)/_components/InventoryNavbarComponent'
import SidebarNavProductDrawer from './SidebarNavProductDrawer'
export default function AllProductsPage() {
  return (
    <div>
      
      <div className="">
          <InventoryNavbarComponent path='Products'></InventoryNavbarComponent>
      </div>

      <div className="">
        <LocationTab Location="Products"></LocationTab>
      </div>
      <div className="">
        <ThirdTab></ThirdTab>
      </div>

      <div className="">
      
        <div className="bg-white w-full p-[16px] overflow-hidden">
           <TableComponent></TableComponent>
        </div>
      
      </div>
      <div>
        <SidebarNavProductDrawer></SidebarNavProductDrawer>
      </div>


      
      

    </div>
  )
}
