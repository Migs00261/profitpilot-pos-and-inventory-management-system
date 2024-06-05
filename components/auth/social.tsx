"use client"
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { Button } from '../ui/button'
import {signIn} from "next-auth/react"
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'

export function Social() {
  const onClick = (provider:"google"|"github")=>{
    signIn(provider,{
      callbackUrl:DEFAULT_LOGIN_REDIRECT,
    });

  }
  return (
    <div className='flex items-center w-full gap-x-2'>
      <Button
      size="lg"
      className='w-full hover:text-coolGray800'
      variant="outline"
      onClick={()=>onClick("google")}
      >
        <FcGoogle
        className='h-5 w-5'
        ></FcGoogle>
        <h2 className='ml-2 text-coolGray600 hover:text-coolGray800'>Sign-in with google</h2>
      </Button>

    </div>
  )
}
