import NextAuth,{DefaultSession} from "next-auth"
import authConfig from "@/auth.config"
import {PrismaAdapter} from "@auth/prisma-adapter"
import { db } from "./lib/db"
import { getUserById } from "@/data/user"
import { UserRole } from "@prisma/client"
import { TwoFactorConfirmation } from "@prisma/client"
import { getTwoFactorConfirmationByUserId } from "./data/two-factor-confirmation"
import { getAccountByUserId } from "./data/account"


export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,

} = NextAuth({
  pages:{
    signIn:"/auth/login",
    
  },
  events:{
    async linkAccount({user}){
      console.log(user)
      await db.user.update({
        where:{id:user.id},
        data:{emailVerified:new Date()}

      })
    }

  },
  callbacks:{
    async signIn({user,account,profile}){
      console.log( `${account} ${profile}`)
      //allow Oauth without email verification
      if(account?.provider !== "credentials") return true
       const existingUser = await getUserById(user.id || "");
       //prevent sign in without email verification
      if(!existingUser || !existingUser.emailVerified){
        return false
      }

      //Add 2fa check
     
      if(existingUser.isTwoFactorEnabled){
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id)
        console.log(twoFactorConfirmation)
        if(!twoFactorConfirmation) return false

        //delete two factor confirmation for next sign in
        await db.twoFactorConfirmation.delete({
          where:{id:twoFactorConfirmation.id}
        })
      }

       return true
    },
    // async signIn({ account, profile }) {
    //   if (account.provider === "google") {
    //     return profile.email_verified && profile.email.endsWith("@example.com")
    //   }
    //   return true // Do different verification for other providers that don't have `email_verified`
    // },

    async session({token,session}){
  
      if(token.sub && session.user){
        session.user.id = token.sub
      }
      if(token.role && session.user){
        session.user.role = token.role as UserRole
      }
      if(token.isTwoFactorEnabled && session.user){
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as Boolean
      }
      if(session.user){
        session.user.firstname = token.firstname as string
        session.user.lastname = token.lastname as string
        session.user.email = token.email as string
        session.user.isOAuth = token.isOAuth as boolean
      }
      return session
    },
    async jwt({token}){
      console.log("I AM BEING CALLED AGAIN");
      
    
     token.customField = "test"
     if(!token.sub) return token;
     const existingUser = await getUserById(token.sub)
     if(!existingUser) return token
     const existingAccount = await getAccountByUserId(
      existingUser.id
     )
     token.isOAuth = !!existingAccount
     token.firstname = existingUser.firstname
     token.lastname = existingUser.lastname
     token.email = existingUser.email
    token.role = existingUser.role
    token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled

      return token
    }
  },
  adapter:PrismaAdapter(db),
  session:{strategy:"jwt"},
  ...authConfig,
  
})