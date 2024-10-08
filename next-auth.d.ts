import NextAuth,{type DefaultSession} from "next-auth";
import { UserRole } from "@prisma/client"
export type ExtendedUser = DefaultSession["user"] & {
    role:UserRole
    isTwoFactorEnabled:Boolean
    isOAuth:Boolean
    firstname:string
    lastname:string
}

declare module "next-auth"{
    interface Session{
        user:ExtendedUser
    }
}
