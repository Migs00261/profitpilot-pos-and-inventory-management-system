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
import { UPDATE_UNIT } from '@/Graphql/Inventory/InventoryUnits';
import { useQueryClient } from 'react-query';
import { UnitSchema } from '@/schemas';
export default function UnitEditModal({userDetails,isOpen,onOpenChange}:any) {
  const user:any = useCurrentUser()
    const queryClient = useQueryClient()

    const [isPending,startTransition] = useTransition()
    const [updateUnit,{data,loading,error:categoryerror}] = useMutation(UPDATE_UNIT)
    

    
    const [myerror,setError] = useState<string | undefined>("")
    const [success,setSuccess] = useState<string | undefined>("")

    
    const form = useForm<z.infer<typeof UnitSchema>>({
     
      resolver:zodResolver(UnitSchema),
      defaultValues:{
        unit: "",
        shortName: "",
        baseUnit: "",
        operator: "",
        operatorValue: ""
       
  
  
      },
      mode:"onChange"
    })
    const {reset} = form
    
    
   
  
  
    const onSubmit = (values:z.infer<typeof UnitSchema>)=>{
      setSuccess("")
      setError("")
      startTransition(async()=>{
        const mydata = UnitSchema.safeParse(values)
        const sentdata = mydata?.data

        try{
          
          await updateUnit({
            variables:{
              myId:userDetails.id,
              myuserId:user.id,
              myunit:sentdata?.unit,
              myshortName:sentdata?.shortName,
              mybaseUnit:sentdata?.baseUnit,
              myoperator:sentdata?.operator,
              myoperatorValue:sentdata?.operatorValue
             
    
            }
          })
            if(!loading){
              reset()
              queryClient.invalidateQueries('getUnits')
              toast.success("Unit updated successfully")
              onOpenChange(false)
              
            
            }
            if(categoryerror){
              toast.error("something went wrong")
            }
           
          
  
         
          
          
  
  
          
        }catch(err:any){
          console.log(err)
          setError("error updating Unit")
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
              <ModalHeader className="flex flex-col gap-1">Update selected Unit</ModalHeader>
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
                name="unit"
                render={({field})=>(
                  <FormItem>
                    <FormLabel className="text-coolGray600">Unit name</FormLabel>
                    <FormControl>
                      <Input
                      {...field}
                      placeholder={userDetails.unit}
                      disabled={isPending}
                     
                      ></Input>
                    </FormControl>
                    <FormMessage/>

                  </FormItem>
                )}
                />
              <FormField
                control={form.control}
                name="shortName"
                render={({field})=>(
                  <FormItem>
                    <FormLabel className="text-coolGray600">Short Name</FormLabel>
                    <FormControl>
                      <Input
                      {...field}
                      placeholder={userDetails.shortName}
                      disabled={isPending}
                      ></Input>
                    </FormControl>
                    <FormMessage/>

                  </FormItem>
                )}
                />
              <FormField
                control={form.control}
                name="baseUnit"
                render={({field})=>(
                  <FormItem>
                    <FormLabel className="text-coolGray600">Base Unit</FormLabel>
                    <FormControl>
                      <Input
                      {...field}
                      placeholder={userDetails.baseUnit}
                      disabled={isPending}
                      ></Input>
                    </FormControl>
                    <FormMessage/>

                  </FormItem>
                )}
                />
              <FormField
                control={form.control}
                name="operator"
                render={({field})=>(
                  <FormItem>
                    <FormLabel className="text-coolGray600">Operator</FormLabel>
                    <FormControl>
                      <Input
                      {...field}
                      placeholder={userDetails.operator}
                      disabled={isPending}
                      ></Input>
                    </FormControl>
                    <FormMessage/>

                  </FormItem>
                )}
                />
              <FormField
                control={form.control}
                name="operatorValue"
                render={({field})=>(
                  <FormItem>
                    <FormLabel className="text-coolGray600">Operator Value</FormLabel>
                    <FormControl>
                      <Input
                      {...field}
                      placeholder={userDetails.operatorValue}
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
