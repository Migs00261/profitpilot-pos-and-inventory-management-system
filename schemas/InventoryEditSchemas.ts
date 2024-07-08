import * as  z  from "zod"

export const CategoryEditSchema = z.object({
    category:z.optional(z.string().min(3,{
        message:"minimum of 3 characters required"
    })),
    description:z.optional(z.string().min(10,{
        message:"minimum of 10 characters required"
    }))
})
export const WarehouseEditSchema = z.object({
    warehouse:z.optional(z.string()),
    email:z.optional(z.string().email({
        message:"email is required"
    })),
    phonenumber:z.optional(z.string()),

    country:z.optional(z.string().min(3,{
        message:"minimum of 3 characters required"
    })),
    city:z.optional(z.string().min(3,{
        message:"minimum of 3 characters required"
    })),
    
    zipcode:z.optional(z.string()),
    
})