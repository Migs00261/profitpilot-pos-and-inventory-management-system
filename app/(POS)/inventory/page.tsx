import React from 'react'
import InventoryNavbarComponent from '../_components/InventoryNavbarComponent'
import {Button} from "@nextui-org/react";
import Link from 'next/link';
export default function page() {
  return (
    <div className=''>
      <div className="">
        <InventoryNavbarComponent path=''></InventoryNavbarComponent>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 gap-4 h-screen p-[16px]">

        <div className="w-full h-full">
           <Link href='/inventory/allproducts'>
              <Button className='w-full h-full bg-white text-xl hover:bg-custom-gradient hover:text-white font-bold text-coolGray600'>
              Manage Products
              </Button>
           </Link>
        </div>

        <div className="w-full h-full">
          <Link href='/inventory/brand'>
            <Button className='w-full h-full bg-white text-xl hover:bg-custom-gradient hover:text-white font-bold text-coolGray600' >
            Add/view Brands
            </Button>
          </Link>
        </div>

        <div className="w-full h-full">
          <Link href='/inventory/category'>
            <Button className='w-full h-full bg-white text-xl hover:bg-custom-gradient hover:text-white font-bold text-coolGray600'>
            Add/View Categories
            </Button>
          </Link>
        </div>

        <div className="w-full h-full">
          <Link href="/inventory/variants">
            <Button className='w-full h-full bg-white text-xl hover:bg-custom-gradient hover:text-white font-bold text-coolGray600'>
            Add/View Variants
            </Button>
          </Link>
        </div>

        <div className="w-full h-full">
          <Link href="/inventory/units">
            <Button className='w-full h-full bg-white text-xl hover:bg-custom-gradient hover:text-white font-bold text-coolGray600'>
            Add/View Units
            </Button>
          </Link>
        </div>

        <div className="w-full h-full">
          <Link href="/inventory/warehouse">
            <Button className='w-full h-full bg-white text-xl hover:bg-custom-gradient hover:text-white font-bold text-coolGray600'>
            Add/View Warehouses
            </Button>
          </Link>
        </div>
      

      </div>
      

    </div>
  )
}
