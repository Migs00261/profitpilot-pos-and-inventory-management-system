"use client"
import React from 'react'
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
import { UPDATE_BRAND } from '@/Graphql/Inventory/InventoryBrands';
import { BrandsSchema } from '@/schemas';
import { useQueryClient } from 'react-query';

export default function BrandEditModal({userDetails,isOpen,onOpenChange}:any) {
  const user:any = useCurrentUser()
    const queryClient = useQueryClient()

    const [isPending,startTransition] = useTransition()
    const [updateBrand,{data,loading,error:categoryerror}] = useMutation(UPDATE_BRAND)


    const [myerror,setError] = useState<string | undefined>("")
    const [success,setSuccess] = useState<string | undefined>("")
  
    
  
    const form = useForm<z.infer<typeof BrandsSchema>>({
  
      resolver:zodResolver(BrandsSchema),
      defaultValues:{
        brandName:"",
        description:""

        
       
  
  
      },
      mode:"onChange"
    })
  
    
    const {reset} = form
  
  
    const onSubmit = (values:z.infer<typeof BrandsSchema>)=>{
      setSuccess("")
      setError("")
      startTransition(async()=>{
        const mydata = BrandsSchema.safeParse(values)
        const sentdata = mydata?.data

        try{
          
          await updateBrand({
            variables:{
              myId:userDetails.id,
              myuserId:user.id,
              mybrand:sentdata?.brandName,
              mydescription:sentdata?.description
             
    
            }
          })
            if(!loading){
              reset()
              queryClient.invalidateQueries('getInventoryBrands')
              toast.success("brand updated successfully")
              onOpenChange(false)
              
            
            }
            if(categoryerror){
              toast.error("something went wrong")
            }
           
          
  
         
          
          
  
  
          
        }catch(err:any){
          console.log(err)
          setError("error updating brand")
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
              <ModalHeader className="flex flex-col gap-1">Update selected Brand</ModalHeader>
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
                name="brandName"
                render={({field})=>(
                  <FormItem>
                    <FormLabel className="text-coolGray600">Brand name</FormLabel>
                    <FormControl>
                      <Input
                      {...field}
                      placeholder={userDetails.brand}
                      disabled={isPending}
                      ></Input>
                    </FormControl>
                    <FormMessage/>

                  </FormItem>
                )}
                />
              <FormField
                control={form.control}
                name="description"
                render={({field})=>(
                  <FormItem>
                    {/* <FormLabel className="text-coolGray600">description</FormLabel> */}
                    <FormControl>
                          <Textarea
                          {...field}
                          disabled={isPending}
                          label="Description"
                          variant="flat"
                          placeholder={userDetails.description}
                          className="w-full"
                         
                        />
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
