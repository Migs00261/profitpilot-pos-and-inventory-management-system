'use client'
import React from 'react'
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import { UserButton } from '@/components/auth/user-button';
import { useAppDispatch,useAppSelector } from '@/redux/hooks/hooks';
import { sidebarnavtrigger } from '@/redux/slices/sidebarnav';
import { RxHamburgerMenu } from "react-icons/rx"
import { IoClose} from 'react-icons/io5';
type InventoryNav = {
    path:string
}


export default function InventoryNavbarComponent({path}:InventoryNav) {
    const sidebarnavstate = useAppSelector((state)=>state.reducer.sidebarnav.sidebarnav)
    const dispatch = useAppDispatch()
    function handleNavbarTrigger(){
      dispatch(sidebarnavtrigger())
    }
   
  return (
    <div className='flex md:flex-row md:justify-between md:items-center bg-white p-[8px] flex-col gap-2 md:gap-0'>

        <div className="flex items-center justify-center space-x-4" >
            <div className="">
                <button className='w-[42px] h-[42px]' onClick={handleNavbarTrigger}>{!sidebarnavstate ? <IoClose className='w-[24px] h-[24px] hover:text-coolGray800 text-coolGray800'></IoClose>:<RxHamburgerMenu className='hover:text-coolGray800 text-coolGray800 w-[24px] h-[24px]'></RxHamburgerMenu>}</button>
            </div>
           <div className="">
                <Breadcrumbs>
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Inventory</BreadcrumbItem>
                    <BreadcrumbItem>{path}</BreadcrumbItem>
                </Breadcrumbs>

           </div>
            
        </div>

        <div className="">
            <UserButton></UserButton>
        </div>
    </div>
  )
}
