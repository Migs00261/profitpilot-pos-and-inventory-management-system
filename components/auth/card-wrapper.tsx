"use client"

import { Card,CardContent,CardFooter,CardHeader } from "../ui/card";
import { Header } from "./header";
import {Social} from "./social"
import { BackButton } from "./back-button";
interface CardWrapperProps {
    children:React.ReactNode;
    headerLabel:string;
    backButtonLabel:string;
    backButtonHref:string;
    showSocial?:boolean;
    description:string;
}

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial,
    description
}:CardWrapperProps)=>{
    return (
        <Card className="w-full">
            <CardHeader>
                <Header label={headerLabel} description={description}></Header>
            </CardHeader>
            <CardContent>
               {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <Social/>
                </CardFooter>
            )}
            <CardFooter>

                <BackButton
                label={backButtonLabel}
                href={backButtonHref}
                >
                </BackButton>
            </CardFooter>
            

        </Card>
    )

}