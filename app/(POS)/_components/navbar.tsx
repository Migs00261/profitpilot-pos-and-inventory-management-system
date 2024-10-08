'use client'
import Link from 'next/link';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Image from 'next/image';
import Dot from './dot';
import { BiRun } from "react-icons/bi";
import { usePathname} from 'next/navigation'
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { MdInventory } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { IoMdReturnLeft } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { useEffect } from 'react'
import { useAppSelector } from '@/redux/hooks/hooks';
import { useState} from 'react';
function Navbar() {
    const mypathname = usePathname()
    const [navbar,setNavbar] = useState<boolean>(false)
    const [pathname,setPathname] = useState<String>('')
    const sidebarnavstate = useAppSelector((state)=>state.reducer.sidebarnav.sidebarnav)
    
    useEffect(()=>{
        setNavbar(sidebarnavstate)
    },[sidebarnavstate])
    

    useEffect(() => {
        setPathname(mypathname)
    }, [mypathname])

  return (
    <div>
     <Sidebar className='text-[16px] space-y-4' backgroundColor='#FFFFFF' collapsed={navbar}>
        <div className="profitpilotlogo w-full flex items-center justify-center p-2">
          <Image src="/logo-no-background.svg" alt='profit pilot logo' width={150} height={150} ></Image>
        </div>
     
        
        <Menu>
        
        <MenuItem className={`${pathname == '/quickactions'?'text-white bg-primarycolor rounded':'text-coolGray600'} hover:text-coolGray800`} icon={<BiRun className='w-[24px] h-[24px]'></BiRun>} component={<Link href="/quickactions" />}>Quick Actions</MenuItem>
        <MenuItem className={`${pathname == '/dashboard'?'text-white bg-primarycolor rounded':'text-coolGray600'} hover:text-coolGray800`} icon={<TbLayoutDashboardFilled className='w-[24px] h-[24px]'></TbLayoutDashboardFilled>} component={<Link href="/dashboard" />}>Dashboard</MenuItem>

    <SubMenu className={`${pathname.startsWith('/inventory')?'text-white bg-primarycolor':'text-coolGray600'} hover:text-coolGray800`} label="Inventory" icon={<MdInventory className='w-[24px] h-[24px]'></MdInventory>} component={<Link href="/inventory" />}>

        <MenuItem className={`${pathname == '/inventory/allproducts' ?' bg-blue-100 rounded m-[8px] text-coolGray800 font-medium':'text-coolGray600'}`}  component={<Link href="/inventory/allproducts" />}>
            <div className="flex flex-row space-x-2 items-center w-full">
                <div className="">{pathname == '/inventory/allproducts' && <Dot></Dot>}</div>
                <div className='text-[16px]'>Products</div>
            </div>
            
        </MenuItem>
        <MenuItem className={`${pathname == '/inventory/brand' ?' bg-blue-100 rounded font-medium m-[8px] text-coolGray800 ':'text-coolGray600'}`}  component={<Link href="/inventory/brand" />}>
            <div className="flex flex-row space-x-2 items-center w-full">
                <div className="">{pathname == '/inventory/brand' && <Dot></Dot>}</div>
                <div className='text-[16px]'>Brand</div>
            </div>
            
        </MenuItem>
        <MenuItem className={`${pathname == '/inventory/category' ?' bg-blue-100 font-medium rounded m-[8px] text-coolGray800 ':'text-coolGray600'}`}  component={<Link href="/inventory/category" />}>
            <div className="flex flex-row space-x-2 items-center w-full">
                <div className="">{pathname == '/inventory/category' && <Dot></Dot>}</div>
                <div className='text-[16px] '>Category</div>
            </div>
            
        </MenuItem>
       
        <MenuItem className={`${pathname == '/inventory/units' ?' bg-blue-100 rounded font-medium m-[8px] text-coolGray800 ':'text-coolGray600'}`}  component={<Link href="/inventory/units" />}>
            <div className="flex flex-row space-x-2 items-center w-full">
                <div className="">{pathname == '/inventory/units' && <Dot></Dot>}</div>
                <div className='text-[16px] '>Units</div>
            </div>
            
        </MenuItem>
        <MenuItem className={`${pathname == '/inventory/warehouse' ?' bg-blue-100 font-medium rounded m-[8px] text-coolGray800 ':'text-coolGray600'}`}  component={<Link href="/inventory/warehouse" />}>
            <div className="flex flex-row space-x-2 items-center w-full">
                <div className="">{pathname == '/inventory/warehouse' && <Dot></Dot>}</div>
                <div className='text-[16px]'>Warehouse</div>
            </div>
            
        </MenuItem>

    </SubMenu>

    <SubMenu className={`${pathname == '/people'?'text-white bg-primarycolor rounded':'text-coolGray600'} hover:text-coolGray800`} label="People" icon={<MdPeopleAlt className='w-[24px] h-[24px]'></MdPeopleAlt>}>
        <MenuItem>Customer</MenuItem>
        <MenuItem>Supplier</MenuItem>
    </SubMenu>

    <MenuItem className={`${pathname == '/purchase'?'text-white bg-primarycolor rounded':'text-coolGray600'} hover:text-coolGray800`} icon={<IoMdCart className='w-[24px] h-[24px]'></IoMdCart>}>Purchase</MenuItem>

    <SubMenu className={`${pathname == '/return'?'text-white bg-primarycolor rounded':'text-coolGray600'} hover:text-coolGray800`} label="Return" icon={<IoMdReturnLeft className='w-[24px] h-[24px]'></IoMdReturnLeft>}>
        <MenuItem>Purchase</MenuItem>
        <MenuItem>Sale</MenuItem>
    </SubMenu>

    <SubMenu className={`${pathname == '/settings'?'text-white bg-primarycolor rounded':'text-coolGray600'} hover:text-coolGray800`} label="Settings" icon={<IoSettings className='w-[24px] h-[24px]'></IoSettings>}>
        <MenuItem>profile</MenuItem>
        <MenuItem>User Roles</MenuItem>
        <MenuItem>General</MenuItem>
    </SubMenu>

    
</Menu>

      

       
     </Sidebar>
    </div>
  )
}

export default Navbar