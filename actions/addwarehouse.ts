"use client"
import { WarehouseSchema } from "@/schemas"
import * as z from "zod"
import { useMutation } from "@apollo/client"
import { useCurrentUser } from "@/hooks/use-current-user"
import { ADD_WAREHOUSE } from "@/Graphql/Inventory/InventoryWarehouse"
export const AddNewWarehouse = async (values:z.infer<typeof WarehouseSchema>)=>{
    const user = useCurrentUser()
    const validatedFields = WarehouseSchema.safeParse(values)
    console.log(validatedFields)
    const data = validatedFields.data
   

    const [createWarehouse] = useMutation(ADD_WAREHOUSE,{
    variables:{
        userId:user?.id,
        warehouse:data?.warehouse,
        email:data?.email,
        phone:data?.phonenumber,
        country:data?.country,
        city:data?.city,
        zipcode:data?.zipcode}
    })


    const result =createWarehouse()
    console.log(result)

    if(!validatedFields.success){
        return {error:"Invalid fields"}
    }
   




}