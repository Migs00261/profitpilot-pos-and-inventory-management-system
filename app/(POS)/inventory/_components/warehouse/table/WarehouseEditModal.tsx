"use client"
import React, { useEffect, useMemo } from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {useState} from "react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useForm } from 'react-hook-form'
import {zodResolver} from "@hookform/resolvers/zod"
import {Textarea} from "@nextui-org/react";
import {
Form,
FormControl,
FormField,
FormItem,
FormLabel,
FormMessage
} from "@/components/ui/form"
import * as z from "zod"
import { Input } from "@/components/ui/input";
import { Button } from '@nextui-org/react'
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { useTransition } from 'react'
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import { UPDATE_WAREHOUSE } from '@/Graphql/Inventory/InventoryWarehouse';
import { useQueryClient } from 'react-query';
import { WarehouseSchema } from '@/schemas';
export default function WarehouseEditModal({userDetails,isOpen,onOpenChange}:any) {
  const user:any = useCurrentUser()
    const queryClient = useQueryClient()

    const [isPending,startTransition] = useTransition()
    const [updateWarehouse,{data,loading,error:categoryerror}] = useMutation(UPDATE_WAREHOUSE)
    

    
    const [myerror,setError] = useState<string | undefined>("")
    const [success,setSuccess] = useState<string | undefined>("")

    
    const form = useForm<z.infer<typeof WarehouseSchema>>({
     
      resolver:zodResolver(WarehouseSchema),
      defaultValues:{
        warehouse:userDetails ? userDetails.warehouse : userDetails?.warehouse,
        email:userDetails ? userDetails.email : userDetails?.email,
        phonenumber:userDetails ? userDetails.phone : userDetails?.phone,
        country:userDetails ? userDetails.country : userDetails?.country,
        city:userDetails ? userDetails.city : userDetails?.city,
        zipcode:userDetails ? userDetails.zipCode : userDetails?.zipCode
       
  
  
      },
      mode:"onChange"
    })
    const {reset} = form
    
    
   
  
  
    const onSubmit = (values:z.infer<typeof WarehouseSchema>)=>{
      setSuccess("")
      setError("")
      startTransition(async()=>{
        const mydata = WarehouseSchema.safeParse(values)
        const sentdata = mydata?.data

        try{
          
          await updateWarehouse({
            variables:{
              mywarehouseId:userDetails?.id,
              myuserId:user.id,
              mywarehouse:sentdata?.warehouse,
              myemail:sentdata?.email,
              myphonenumber:sentdata?.phonenumber,
              mycountry:sentdata?.country,
              mycity:sentdata?.city,
              myzipcode:sentdata?.zipcode
             
    
            }
          })
            if(!loading){
              reset()
              queryClient.invalidateQueries('getWarehouses')
              toast.success("warehouse updated successfully")
              onOpenChange(false)
              
            
            }
            if(categoryerror){
              toast.error("something went wrong")
            }
           
          
  
         
          
          
  
  
          
        }catch(err:any){
          console.log(err)
          setError("error updating warehouse")
          toast.error("something went wrong")
  
        }
        
       
       
  
      })
    
    }
    

  return (
    <div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Update selected Warehouse</ModalHeader>
              <ModalBody>
              <div className="">
            <div className="">
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
                    <FormLabel className="text-coolGray600">warehouse name</FormLabel>
                    <FormControl>
                      <Input
                      {...field}
                      placeholder={userDetails.warehouse}
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
                      placeholder={userDetails.email}
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
                    <FormLabel className="text-coolGray600">Phonenumber</FormLabel>
                    <FormControl>
                      <Input
                      {...field}
                      placeholder={userDetails.phone}
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
                      placeholder={userDetails.country}
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
                    <FormLabel className="text-coolGray600">city</FormLabel>
                    <FormControl>
                      <Input
                      {...field}
                      placeholder={userDetails.city}
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
                      placeholder={userDetails.zipCode}
                      disabled={isPending}
                      ></Input>
                    </FormControl>
                    <FormMessage/>

                  </FormItem>
                )}
                />
              
                

              </div>
              <FormError message={myerror}></FormError>
              <FormSuccess message={success}></FormSuccess>

              <ModalFooter>
                <Button radius='sm' color="danger" isLoading={isPending} isDisabled={isPending} variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button type='submit' radius='sm' isLoading={isPending} isDisabled={isPending} className='bg-primarycolor text-white'>
                  Update
                </Button>
              </ModalFooter>
            </form>
          </Form>
            </div>

          </div>
              </ModalBody>
              
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
