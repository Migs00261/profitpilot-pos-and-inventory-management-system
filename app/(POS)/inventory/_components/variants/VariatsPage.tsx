import React from 'react'
import ThirdTab from './ThirdTab'
import TableComponent from './table/table'
import TableLoading from './tableloading'
import { Suspense } from 'react'
import InventoryNavbarComponent from '@/app/(POS)/_components/InventoryNavbarComponent'
import LocationTab from '@/app/(POS)/_components/LocationTab'
import SidebarNavVariantsDrawer from './SidebarNavVariantsDrawer'
export default function VariantsPage() {
  return (
    <div>

      <div className="">
        <InventoryNavbarComponent path='Variants'></InventoryNavbarComponent>
      </div>

      <div className="">
        <LocationTab Location="Variants"/>
      </div>
      <div className="">
        <ThirdTab></ThirdTab>
      </div>

      <div className="">
        <div className="bg-white w-full p-[16px]">
          <Suspense fallback={<TableLoading></TableLoading>}>
            <TableComponent></TableComponent>
          </Suspense>
           
        </div>
      </div>
      
      <div className="">
        <SidebarNavVariantsDrawer></SidebarNavVariantsDrawer>

      </div>


      
      

    </div>
  )
}
