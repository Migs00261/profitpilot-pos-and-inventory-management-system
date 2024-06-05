import { Poppins } from "next/font/google";
import {cn} from "@/lib/utils"
import Image from "next/image";
const font = Poppins({
    subsets:["latin"],
    weight:["600"]
})

interface HeaderProps {
    label:string
    description:string
}

export const Header = ({label,description}:HeaderProps)=>{
    return(
        <div className="w-full flex flex-col gap-y-2 ">
            <Image src='/logo-no-background.svg' alt="profitpilot logo" width={120} height={100}></Image>


            <p className="text-[32px] font-bold text-coolGray800">{label}</p>
            <p className="text-[14px] font-medium text-coolGray600">{description}</p>

        </div>
    )

}