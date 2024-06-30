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
import { UnitSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from '@nextui-org/react'
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { useTransition } from 'react'
import { useMutation } from "@apollo/client";
import { MdInventory } from "react-icons/md";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useAppDispatch,useAppSelector } from "@/redux/hooks/hooks";
import { sidebarinventoryunitsdrawertrigger } from "@/redux/slices/sidebarInventoryUnitsDrawerSlice";
import { CREATE_UNIT } from "@/Graphql/Inventory/InventoryUnits";
import {toast} from "react-toastify"
import { FiPlus } from "react-icons/fi";
import { useQueryClient } from 'react-query';

function SidebarNavUnitDrawer() {
 
    const user = useCurrentUser()
    const [createUnit,{data,loading,error}] = useMutation(CREATE_UNIT)
    const dispatch = useAppDispatch()
    const sidebarunitdrawerstate = useAppSelector((state)=>state.reducer.sidebarinventoryunitsdrawer.sidebardrawer)
    const [isOpen, setIsOpen] = useState(false);
    const [isPending,startTransition] = useTransition()
  const [myerror,setError] = useState<string | undefined>("")
  const [success,setSuccess] = useState<string | undefined>("")
  const queryClient = useQueryClient()

  

  const form = useForm<z.infer<typeof UnitSchema>>({

    resolver:zodResolver(UnitSchema),
    defaultValues:{
        unit:"",
        shortName:"",
        baseUnit:"",
        operator:"",
        operatorValue:""

    },
    mode:"onChange"
  })

  
  const {reset} = form


  const onSubmit:any = (values:z.infer<typeof UnitSchema>)=>{
    setSuccess("")
    setError("")
    startTransition(async()=>{
      const mydata = UnitSchema.safeParse(values)
      const sentdata = mydata?.data
      try{
        
        await createUnit({
          variables:{
            myuserId:user?.id,
            myunit:sentdata?.unit,
            myshortName:sentdata?.shortName,
            mybaseUnit:sentdata?.baseUnit,
            myoperator:sentdata?.operator,
            myoperatorValue:sentdata?.operatorValue
            
  
          }
        })
          if(!loading){
            reset()
            dispatch(sidebarinventoryunitsdrawertrigger())
            toast.success("unit created")
            queryClient.invalidateQueries("getUnits")
            
            
          
          }
          
         
        

       
        
        


        
      }catch(err:any){

        setError("error creating unit")
        toast.error("something went wrong")

      }
      
     
     

    })
  
  }

    useEffect(()=>{
        setIsOpen(sidebarunitdrawerstate)
    },[sidebarunitdrawerstate])

  const handleClose = () => {
    dispatch(sidebarinventoryunitsdrawertrigger())
    setSuccess("")
    setError("")
  };
  

  
  return (
    <>
      <Drawer open={isOpen} onClose={handleClose} position="right" className="bg-[#FAFDFF]">
        <Drawer.Header className=" font-bold " title="Add New Unit" titleIcon={MdInventory} />
        <Drawer.Items>
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
                <FormLabel className="text-coolGray600">Unit Name</FormLabel>
                <FormControl>
                  <Input
                  {...field}
                  placeholder='Grams'
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
                  placeholder='g'
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
                <FormLabel className="text-coolGray600">baseUnit</FormLabel>
                <FormControl>
                  <Input
                  {...field}
                  placeholder='kilogram'
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
                  placeholder='/'
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
                  placeholder='1000'
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
          <div className="flex flex-row space-x-4">
              <Button startContent={<FiPlus />} type='submit' isDisabled={isPending} isLoading={isPending} className=' bg-primarycolor text-white w-[70%]' radius='sm' >Add Unit</Button>
              <Button variant="bordered" isDisabled={isPending} className='w-[30%]' radius='sm' onClick={()=>dispatch(sidebarinventoryunitsdrawertrigger())}>cancel</Button>

           </div>

        </form>
      </Form>
        </Drawer.Items>
      </Drawer>
    </>
  )
}

export default SidebarNavUnitDrawer