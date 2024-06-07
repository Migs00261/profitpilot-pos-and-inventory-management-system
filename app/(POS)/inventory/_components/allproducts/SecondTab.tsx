import React from 'react'
import { MdInventory } from "react-icons/md";
import {Button, ButtonGroup} from "@nextui-org/react";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { HiOutlinePrinter } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
function SecondTab() {
  return (
    <div className='bg-white p-[8px] flex items-center justify-between border-slate-200 border-b-[1px]'>
        <div className="space-y-2 flex flex-row items-center justify-center text-coolGray600">
            <div className="">
               <MdInventory className='w-[32px] h-[32px]' />
            </div>
            <div className="font-bold text-[24px]">
                Inventory
            </div>
        </div>

        <div className="space-x-2">
        <Button className='border-primarycolor text-primarycolor' startContent={<IoCloudDownloadOutline/>} variant="bordered" radius='sm'>Export</Button>
        <Button className='border-primarycolor text-primarycolor' color="primary" startContent={<HiOutlinePrinter/>} variant="bordered" radius='sm'>Print</Button>
        <Button className='bg-primarycolor text-white' color="primary" startContent={<IoMdAdd/>} radius='sm'>Add Product</Button>
            

        </div>
    </div>
  )
}

export default SecondTab