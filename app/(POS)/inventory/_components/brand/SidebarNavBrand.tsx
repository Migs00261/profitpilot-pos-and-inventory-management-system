"use client";
import {Drawer} from "flowbite-react";
import { useEffect, useState,useCallback } from "react";
import { sidebarnavbrandtrigger } from "@/redux/slices/sidebarInventoryBrandSlice";
import { useAppDispatch,useAppSelector } from "@/redux/hooks/hooks";
import Dropzone from "@/app/(POS)/_components/dropzone";
import { useCurrentUser } from "@/hooks/use-current-user";
import { MdInventory } from "react-icons/md";
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
import { BrandsSchema } from "@/schemas";
import { toast } from "react-toastify";
import { CREATE_BRAND } from "@/Graphql/Inventory/InventoryBrands";
import { FiPlus } from "react-icons/fi";
function SidebarNavBrand() {
  const user:any = useCurrentUser()
    const dispatch = useAppDispatch()
    const sidebarbavbrandstate = useAppSelector((state)=>state.reducer.sidebarnavbrand.sidebarnav)
    const [isOpen, setIsOpen] = useState(false);
    const [receivedUrl,setReceivedUrl] = useState<String>("")
    const [isPending,startTransition] = useTransition()
    const [createBrand,{data,loading,error:branderror}] = useMutation(CREATE_BRAND)

    
    const [myerror,setError] = useState<string | undefined>("")
    const [success,setSuccess] = useState<string | undefined>("")
  
    
  
    const form = useForm<z.infer<typeof BrandsSchema>>({
  
      resolver:zodResolver(BrandsSchema),
      defaultValues:{
        brandName:"",
        description:"",
        
       
  
  
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
        console.log(sentdata)
        try{
          
          await createBrand({
            variables:{
              myuserId:user?.id,
              mybrand:sentdata?.brandName,
              myimage:receivedUrl === null?"https://img.freepik.com/free-vector/brand-creation-concept-illustration_114360-11328.jpg":receivedUrl,
              mydescription:sentdata?.description
              
    
            }
          })
            if(!loading){
              reset()
              dispatch(sidebarnavbrandtrigger())
              toast.success("brand created")
              
              
            
            }
            
           
          
  
         
          
          
  
  
          
        }catch(err:any){
          console.log(err)
          setError("error creating brand")
          toast.error("something went wrong")
  
        }
        
       
       
  
      })
    
    }

    useEffect(()=>{
        setIsOpen(sidebarbavbrandstate)
    },[sidebarbavbrandstate])
   
    const handleReceivedUrl = useCallback((data:any)=>{
        setReceivedUrl(data)
    },[])
    


  const handleClose = () => {
    dispatch(sidebarnavbrandtrigger())
  };
  return (
    <>
     
      <Drawer open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header title="Add New Brand" titleIcon={MdInventory} />
        <Drawer.Items>
          <div className="">
            <div className="">
              <Dropzone onUrlSend={handleReceivedUrl}></Dropzone>
            </div>
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
                    <FormLabel className="text-coolGray600">Name of Brand</FormLabel>
                    <FormControl>
                      <Input
                      {...field}
                      placeholder='samsung'
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
                          placeholder="Enter the description of the brand"
                          className="max-w-xs"
                        />
                    </FormControl>
                    <FormMessage/>

                  </FormItem>
                )}
                />
                

              </div>
              <FormError message={myerror}></FormError>
              <FormSuccess message={success}></FormSuccess>
              <div className="flex flex-row space-x-4">
              <Button startContent={<FiPlus />} type='submit' isDisabled={isPending} isLoading={isPending} className=' bg-primarycolor text-white w-[70%]' radius='sm' >Add Brand</Button>
              <Button variant="bordered" isDisabled={isPending} className='w-[30%]' radius='sm' onClick={()=>dispatch(sidebarnavbrandtrigger())}>cancel</Button>

              </div>
              

            </form>
          </Form>
            </div>

          </div>
        </Drawer.Items>
      </Drawer>
    </>
  )
}

export default SidebarNavBrand