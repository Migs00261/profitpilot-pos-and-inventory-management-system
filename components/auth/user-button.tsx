"use client"
import { FaUser } from "react-icons/fa"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger

} from "@/components/ui/dropdown-menu"

import {Avatar, AvatarGroup, AvatarIcon} from "@nextui-org/react";
import { useCurrentUser } from "@/hooks/use-current-user"
import { LogoutButton } from "@/components/auth/logout-button"
import { ExitIcon } from "@radix-ui/react-icons"

export const UserButton = ()=>{
    const user = useCurrentUser()
    
    return(
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="flex space-x-2 justify-center items-center">
                    <div className=""><Avatar size='sm' src={user?.image || ""} fallback={<FaUser className="text-white w-[16px] h-[16px]"/>}></Avatar></div>
                    <div className="flex flex-col items-start justify-center">
                        <h1 className="text-coolGray800 text-[16px] font-medium">{user?.firstname} {user?.lastname}</h1>
                        <p className="text-coolGray600 text-[10px]">{user?.role}</p>
                    </div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40" align="end">
                <LogoutButton>
                    <DropdownMenuItem>
                        <ExitIcon className="h-4 w-4 mr-2"></ExitIcon>
                        Logout
                    </DropdownMenuItem>

                </LogoutButton>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}