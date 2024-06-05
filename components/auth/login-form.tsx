"use client"
import React, { useState } from 'react'
import { CardWrapper } from './card-wrapper'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'next/navigation'
import {zodResolver} from "@hookform/resolvers/zod"
import {Button, ButtonGroup} from "@nextui-org/react";
import {
Form,
FormControl,
FormField,
FormItem,
FormLabel,
FormMessage
} from "@/components/ui/form"
import * as z from "zod"
import { LoginSchema } from '@/schemas'
import { Input } from '../ui/input'
import { FormError } from '../form-error'
import { FormSuccess } from '../form-success'
import {Login} from "@/actions/login"
import { useTransition } from 'react'
import Link from 'next/link'
export default function LoginForm() {
  const [showTwoFactor,setShowTwoFactor] = useState(false)
  const searchParams = useSearchParams();
  const urlError = searchParams.get("error") === "OAuthAccountNotLinked" ? "Email Already in use with different provider!" :""
  const [isPending,startTransition] = useTransition()
  const [error,setError] = useState<string | undefined>("")
  const [success,setSuccess] = useState<string | undefined>("")
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver:zodResolver(LoginSchema),
    defaultValues:{
      email:"",
      password:""
    }
  })
  const onSubmit = (values:z.infer<typeof LoginSchema>)=>{
    setSuccess("")
    setError("")
    startTransition(()=>{
      Login(values).then((data:any)=>{
         setError(data?.error)
        setSuccess(data?.success)
        console.log(data)
        if(data?.error){
          form.reset();
          setError(data.error)
        }
        if(data?.success){
          form.reset();
          setSuccess(data.success)
        }

        if(data?.twoFactor){
          setShowTwoFactor(true)
        }
      }).catch(()=>setError("Something went wrong"))


    })
  
  }

  return (
    <CardWrapper
    headerLabel='Welcome back 😃'
    backButtonLabel="Don't have an account? sign-up"
    backButtonHref='/auth/register'
    showSocial={true}
    description='Please enter your login details'
    >
      <Form {...form}>
        <form 
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-2 md:space-y-4'
        >
          <div className='space-y-4'>
            {showTwoFactor && <>
            <FormField
            control={form.control}
            name="code"
            render={({field})=>(
              <FormItem>
                <FormLabel>Two Factor Code</FormLabel>
                <FormControl>
                  <Input
                  {...field}
                  placeholder='123456'
                  disabled={isPending}
                  ></Input>
                </FormControl>
                
                <FormMessage/>

              </FormItem>
            )}
            />
            </>
            }
          {!showTwoFactor &&
            <>
            <FormField
            control={form.control}
            name="email"
            render={({field})=>(
              <FormItem>
                <FormLabel className="text-coolGray600">Email</FormLabel>
                <FormControl>
                  <Input
                  {...field}
                  placeholder='john.doe@example.com'
                  type="email"
                  className='bg-white'
                  disabled={isPending}
                  ></Input>
                </FormControl>
                
                <FormMessage/>

              </FormItem>
            )}
            />

          <FormField
            control={form.control}
            name="password"
            render={({field})=>(
              <FormItem>
                <FormLabel className="text-coolGray600">Password</FormLabel>
                <FormControl>
                  <Input
                  {...field}
                  className='bg-white'
                  placeholder='At least 6 characters'
                  type="password"
                  disabled={isPending}
                  ></Input>
                </FormControl>
                
                <div className="">
                  <Link href="/auth/reset" className='hover:underline text-[14px] text-coolGray600 font-medium hover:text-coolGray800'>Forgot password?</Link>
                </div>
                
                <FormMessage/>

              </FormItem>
            )}
            />
</>
}

          </div>
          <FormError message={error || urlError}></FormError>
          <FormSuccess message={success}></FormSuccess>
          <Button type='submit' disabled={isPending} className='w-full bg-primarycolor text-white text-[16px]' radius='sm'>{showTwoFactor ? "Confirm":"Login"}</Button>

        </form>
      </Form>
    </CardWrapper>
  )
}
