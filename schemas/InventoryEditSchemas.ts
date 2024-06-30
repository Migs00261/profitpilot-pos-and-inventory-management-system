import * as  z  from "zod"

export const CategoryEditSchema = z.object({
    category:z.optional(z.string().min(3,{
        message:"minimum of 3 characters required"
    })),
    description:z.optional(z.string().min(10,{
        message:"minimum of 10 characters required"
    }))
})