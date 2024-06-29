"use client";
import {Drawer} from "flowbite-react";
import { useEffect, useState,useCallback } from "react";
import { sidebarinventorycategorydrawertrigger } from "@/redux/slices/sidebarInventoryCategoryDrawerSlice";
import { useAppDispatch,useAppSelector } from "@/redux/hooks/hooks";
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
import { toast } from "react-toastify";
import { CREATE_CATEGORY } from "@/Graphql/Inventory/InventoryCategory";
import { CategorySchema } from "@/schemas";
import { FiPlus } from "react-icons/fi";
import { useQueryClient } from 'react-query';

function SidebarNavBrand() {
  const user:any = useCurrentUser()
    const dispatch = useAppDispatch()
    const queryClient = useQueryClient()

    const sidebarbarcategorynavstate = useAppSelector((state)=>state.reducer.sidebarinventorycategorydrawer.sidebardrawer)
    const [isOpen, setIsOpen] = useState(false);
    const [isPending,startTransition] = useTransition()
    const [createCategory,{data,loading,error:branderror}] = useMutation(CREATE_CATEGORY)

    
    const [myerror,setError] = useState<string | undefined>("")
    const [success,setSuccess] = useState<string | undefined>("")
  
    
  
    const form = useForm<z.infer<typeof CategorySchema>>({
  
      resolver:zodResolver(CategorySchema),
      defaultValues:{
        category:"",
        description:"",
        
       
  
  
      },
      mode:"onChange"
    })
  
    
    const {reset} = form
  
  
    const onSubmit = (values:z.infer<typeof CategorySchema>)=>{
      setSuccess("")
      setError("")
      startTransition(async()=>{
        const mydata = CategorySchema.safeParse(values)
        const sentdata = mydata?.data
        console.log(sentdata)
        try{
          
          await createCategory({
            variables:{
              myuserId:user?.id,
              mycategory:sentdata?.category,
              mydescription:sentdata?.description,
             
    
            }
          })
            if(!loading){
              reset()
              dispatch(sidebarinventorycategorydrawertrigger())
              toast.success("category created")
              queryClient.invalidateQueries('getInventoryCategories')

              
            
            }
            
           
          
  
         
          
          
  
  
          
        }catch(err:any){
          console.log(err)
          setError("error creating category")
          toast.error("something went wrong")
  
        }
        
       
       
  
      })
    
    }

    useEffect(()=>{
        setIsOpen(sidebarbarcategorynavstate)
    },[sidebarbarcategorynavstate])
   
   
    


  const handleClose = () => {
    dispatch(sidebarinventorycategorydrawertrigger())
  };
  return (
    <>
     
      <Drawer open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header title="Add New Category" titleIcon={MdInventory} />
        <Drawer.Items>
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
                name="category"
                render={({field})=>(
                  <FormItem>
                    <FormLabel className="text-coolGray600">Category name</FormLabel>
                    <FormControl>
                      <Input
                      {...field}
                      placeholder='Electronics'
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
                          placeholder="Enter the description of the category"
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
              <Button startContent={<FiPlus />} type='submit' isDisabled={isPending} isLoading={isPending} className=' bg-primarycolor text-white w-[70%]' radius='sm' >Add Category</Button>
              <Button variant="bordered" isDisabled={isPending} className='w-[30%]' radius='sm' onClick={()=>dispatch(sidebarinventorycategorydrawertrigger())}>cancel</Button>

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