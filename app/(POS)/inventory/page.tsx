'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import InventoryNavbarComponent from '../_components/InventoryNavbarComponent'
import {Button} from "@nextui-org/react";
import Link from 'next/link';
export default function page() {
  const router = useRouter()
  return (
    <div className=''>
      <div className="">
        <InventoryNavbarComponent path=''></InventoryNavbarComponent>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 gap-4 h-screen p-[16px]">

        <div className="w-full h-full">
         
              <Button onClick={()=>router.push('/inventory/allproducts')} className='w-full h-full bg-white text-xl hover:bg-custom-gradient hover:text-white font-bold text-coolGray600'>
              Manage Products
              </Button>
          
        </div>

        <div className="w-full h-full">
          
            <Button onClick={()=>router.push('/inventory/brand')} className='w-full h-full bg-white text-xl hover:bg-custom-gradient hover:text-white font-bold text-coolGray600' >
            Add/view Brands
            </Button>
         
        </div>

        <div className="w-full h-full">
        
            <Button onClick={()=>router.push('/inventory/category')} className='w-full h-full bg-white text-xl hover:bg-custom-gradient hover:text-white font-bold text-coolGray600'>
            Add/View Categories
            </Button>
        
        </div>

        <div className="w-full h-full">
         
            <Button onClick={()=>router.push("/inventory/variants")} className='w-full h-full bg-white text-xl hover:bg-custom-gradient hover:text-white font-bold text-coolGray600'>
            Add/View Variants
            </Button>
          
        </div>

        <div className="w-full h-full">
          
            <Button onClick={()=>router.push('/inventory/units')} className='w-full h-full bg-white text-xl hover:bg-custom-gradient hover:text-white font-bold text-coolGray600'>
            Add/View Units
            </Button>
       
        </div>

        <div className="w-full h-full">
      
            <Button onClick={()=>router.push('/inventory/warehouse')} className='w-full h-full bg-white text-xl hover:bg-custom-gradient hover:text-white font-bold text-coolGray600'>
            Add/View Warehouses
            </Button>
        
        </div>
      

      </div>
      

    </div>
  )
}
