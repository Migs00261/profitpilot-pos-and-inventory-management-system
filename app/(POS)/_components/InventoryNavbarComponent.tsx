'use client'
import React from 'react'
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import { UserButton } from '@/components/auth/user-button';

type InventoryNav = {
    path:string
}

export default function InventoryNavbarComponent({path}:InventoryNav) {
  return (
    <div className='flex md:flex-row md:justify-between md:items-center bg-white p-[8px] flex-col gap-2 md:gap-0'>

        <div className="" >
            <Breadcrumbs>
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Inventory</BreadcrumbItem>
                <BreadcrumbItem>{path}</BreadcrumbItem>
            </Breadcrumbs>
        </div>

        <div className="">
            <UserButton></UserButton>
        </div>
    </div>
  )
}
