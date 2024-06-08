
import React from 'react'
import { MdInventory } from "react-icons/md";
import {Button} from "@nextui-org/react";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { HiOutlinePrinter } from "react-icons/hi";

type LocationType = {
  Location:String
}
function LocationTab({Location}:LocationType) {
  return (
    <div className='bg-white p-[8px] flex flex-col md:flex-row md:items-center md:justify-between border-slate-200 border-b-[1px] gap-2 md:gap-0'>
        <div className="space-y-2 flex flex-row md:items-center md:justify-center text-coolGray600">
            <div className="">
               <MdInventory className='w-[32px] h-[32px]' />
            </div>
            <div className="font-bold text-[24px]">
                /{Location}
            </div>
        </div>

        <div className="space-x-2">
        <Button className='border-primarycolor text-primarycolor' startContent={<IoCloudDownloadOutline/>} variant="bordered" radius='sm'>Export</Button>
        <Button className='border-primarycolor text-primarycolor' color="primary" startContent={<HiOutlinePrinter/>} variant="bordered" radius='sm'>Print</Button>
        
            

        </div>
    </div>
  )
}

export default LocationTab