"use server"
import { WarehouseSchema } from "@/schemas"
import * as z from "zod"
import { db } from "@/lib/db"
import { revalidatePath } from 'next/cache'
export const AddNewWarehouse = async (values:z.infer<typeof WarehouseSchema>)=>{
    const validatedFields = WarehouseSchema.safeParse(values)
    
    if(!validatedFields.success){
        return {error:"Invalid fields"}
    }
    const {warehouse,email,phonenumber,country,city,zipcode} = validatedFields.data
    

    const findwarehouse = await db.warehouses.findFirst({
       where:{
        warehouse
       }
    })
    console.log(findwarehouse?.warehouse)
    if(findwarehouse?.warehouse == warehouse){
        return{error:"duplicate warehouse name"}
    }
    
    try{
        

        const addtowarehouse = await db.warehouses.create({
            data:{
                warehouse,
                email,
                phone:phonenumber,
                country,
                city,
                zipcode
            }
        })
        console.log(addtowarehouse)
        revalidatePath('/inventory/warehouse')
        return {success:"Warehouse added"}

    }catch(error){
        console.log(error)
        return{error:"warehouse was not added"}

    }
    

}