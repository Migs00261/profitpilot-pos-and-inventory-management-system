'use server'
import { db } from "@/lib/db"

export const getAllWarehouseData = async ()=>{
    try{
        const getwarehouseData = await db.warehouses.findMany()
        return getwarehouseData

    }catch(error){
        return {error}

    }
 
}
