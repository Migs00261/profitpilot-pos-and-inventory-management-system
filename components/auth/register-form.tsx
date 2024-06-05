"use client"
import React, { useState } from 'react'
import { CardWrapper } from './card-wrapper'
import { useForm } from 'react-hook-form'
import {zodResolver} from "@hookform/resolvers/zod"
import {
Form,
FormControl,
FormField,
FormItem,
FormLabel,
FormMessage
} from "@/components/ui/form"
import * as z from "zod"
import { RegisterSchema } from '@/schemas'
import { Input } from '../ui/input'
import { Button } from '@nextui-org/react'
import { FormError } from '../form-error'
import { FormSuccess } from '../form-success'
import { Register } from '@/actions/register'
import { useTransition } from 'react'
export default function RegisterForm() {
  const [isPending,startTransition] = useTransition()
  const [error,setError] = useState<string | undefined>("")
  const [success,setSuccess] = useState<string | undefined>("")
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver:zodResolver(RegisterSchema),
    defaultValues:{
      email:"",
      password:"",
      firstname:"",
      lastname:"",
      confirmpassword:""

    },
    mode:"onChange"
  })

  const onSubmit = (values:z.infer<typeof RegisterSchema>)=>{
    setSuccess("")
    setError("")
    startTransition(()=>{
      Register(values).then((data:any)=>{
        setError(data.error)
        setSuccess(data.success)
        
      })

    })
  
  }


  return (
    <CardWrapper
    headerLabel='Create an account 😃'
    backButtonLabel="Already have an account? sign-in"
    backButtonHref='/auth/login'
    showSocial={false}
    description='create an account with us and manage your business today'
    >
      <Form {...form}>
        <form 
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-2 md:space-y-4'
        >
          <div className='space-y-4'>

          <FormField
            control={form.control}
            name="firstname"
            render={({field})=>(
              <FormItem>
                <FormLabel className="text-coolGray600">firstname</FormLabel>
                <FormControl>
                  <Input
                  {...field}
                  placeholder='John'
                  disabled={isPending}
                  ></Input>
                </FormControl>
                <FormMessage/>

              </FormItem>
            )}
            />
          <FormField
            control={form.control}
            name="lastname"
            render={({field})=>(
              <FormItem>
                <FormLabel className="text-coolGray600">lastname</FormLabel>
                <FormControl>
                  <Input
                  {...field}
                  placeholder='Doe'
                  disabled={isPending}
                  ></Input>
                </FormControl>
                <FormMessage/>

              </FormItem>
            )}
            />
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
                  placeholder='atleast 6 characters'
                  type="password"
                  disabled={isPending}
                  ></Input>
                </FormControl>
                <FormMessage/>

              </FormItem>
            )}
            />
          <FormField
            control={form.control}
            name="confirmpassword"
            render={({field})=>(
              <FormItem>
                <FormLabel className="text-coolGray600">ConfirmPassword</FormLabel>
                <FormControl>
                  <Input
                  {...field}
                  placeholder='atleast 6 characters'
                  type="password"
                  disabled={isPending}
                  ></Input>
                </FormControl>
                <FormMessage/>

              </FormItem>
            )}
            />

          </div>
          <FormError message={error}></FormError>
          <FormSuccess message={success}></FormSuccess>
          <Button type='submit' isDisabled={isPending} isLoading={isPending} className='w-full bg-primarycolor text-white' radius='sm' >Create an account</Button>

        </form>
      </Form>
    </CardWrapper>
  )
}
