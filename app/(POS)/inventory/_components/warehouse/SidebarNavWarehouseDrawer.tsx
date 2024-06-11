"use client";

import {Drawer} from "flowbite-react";
import { useEffect, useState } from "react";
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
import { WarehouseSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from '@nextui-org/react'
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { useTransition } from 'react'
import { MdInventory } from "react-icons/md";
import { AddNewWarehouse } from "@/actions/addwarehouse";
import { useAppDispatch,useAppSelector } from "@/redux/hooks/hooks";
import { sidebarinventorywarehousedrawertrigger } from "@/redux/slices/sidebarInventoryWarehouseDrawerSlice";
function SidebarNavWarehouseDrawer() {
    const dispatch = useAppDispatch()
    const sidebarwarehousedrawerstate = useAppSelector((state)=>state.reducer.sidebarinventorywarehousedrawer.sidebardrawer)
    const [isOpen, setIsOpen] = useState(false);
    const [isPending,startTransition] = useTransition()
  const [error,setError] = useState<string | undefined>("")
  const [success,setSuccess] = useState<string | undefined>("")
  const form = useForm<z.infer<typeof WarehouseSchema>>({
    resolver:zodResolver(WarehouseSchema),
    defaultValues:{
      warehouse:"",
      email:"",
      country:"",
      city:"",
      phonenumber:"",
      zipcode:""
     


    },
    mode:"onChange"
  })
  const {reset} = form

  const onSubmit = (values:z.infer<typeof WarehouseSchema>)=>{
    setSuccess("")
    setError("")
    startTransition(()=>{
      AddNewWarehouse(values).then((data:any)=>{
        setError(data.error)
        setSuccess(data.success)
        if(data.success = "Warehouse added"){
          reset()
        }
        
      })

    })
  
  }

    useEffect(()=>{
        setIsOpen(sidebarwarehousedrawerstate)
    },[sidebarwarehousedrawerstate])

  const handleClose = () => {
    dispatch(sidebarinventorywarehousedrawertrigger())
    setSuccess("")
    setError("")
  };
  return (
    <>
      <Drawer open={isOpen} onClose={handleClose} position="right" className="bg-[#FAFDFF]">
        <Drawer.Header className=" font-bold " title="Add New Warehouse" titleIcon={MdInventory} />
        <Drawer.Items>
        <Form {...form}>
        <form 
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-2 md:space-y-4'
        >
          <div className='space-y-4'>

          <FormField
            control={form.control}
            name="warehouse"
            render={({field})=>(
              <FormItem>
                <FormLabel className="text-coolGray600">Name of Warehouse</FormLabel>
                <FormControl>
                  <Input
                  {...field}
                  placeholder='Warehouse1'
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
                  placeholder='example@gmail.com'
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
            name="phonenumber"
            render={({field})=>(
              <FormItem>
                <FormLabel className="text-coolGray600">Phone number</FormLabel>
                <FormControl>
                  <Input
                  {...field}
                  placeholder='+254728884943'
                  disabled={isPending}
                  ></Input>
                </FormControl>
                <FormMessage/>

              </FormItem>
            )}
            />

          <FormField
            control={form.control}
            name="country"
            render={({field})=>(
              <FormItem>
                <FormLabel className="text-coolGray600">Country</FormLabel>
                <FormControl>
                  <Input
                  {...field}
                  placeholder='e.g: Kenya'
                  disabled={isPending}
                  ></Input>
                </FormControl>
                <FormMessage/>

              </FormItem>
            )}
            />
          <FormField
            control={form.control}
            name="city"
            render={({field})=>(
              <FormItem>
                <FormLabel className="text-coolGray600">City</FormLabel>
                <FormControl>
                  <Input
                  {...field}
                  placeholder='eg:Nairobi'
                  disabled={isPending}
                  ></Input>
                </FormControl>
                <FormMessage/>

              </FormItem>
            )}
            />
          <FormField
            control={form.control}
            name="zipcode"
            render={({field})=>(
              <FormItem>
                <FormLabel className="text-coolGray600">zipcode</FormLabel>
                <FormControl>
                  <Input
                  {...field}
                  placeholder='00232'
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
          <Button type='submit' isDisabled={isPending} isLoading={isPending} className='w-full bg-primarycolor text-white' radius='sm' >Add Warehouse</Button>

        </form>
      </Form>
        </Drawer.Items>
      </Drawer>
    </>
  )
}

export default SidebarNavWarehouseDrawer