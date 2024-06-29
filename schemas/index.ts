import { UserRole } from "@prisma/client"
import * as  z  from "zod"
export const SettingsSchema = z.object({
    name:z.optional(z.string()),
    isTwoFactorEnabled:z.optional(z.boolean()),
    role:z.enum([UserRole.ADMIN,UserRole.USER]),
    email:z.optional(z.string().email()),
    password:z.optional(z.string().min(6)),
    newPassword:z.optional(z.string().min(6))


})
.refine((data)=>{
    if(data.password && !data.newPassword){
        return false
    }
    if(!data.password && data.newPassword){
        return false
    }
    return true


},{message:"New password is required!",path:["newPassword"]})
.refine((data)=>{
    if(data.newPassword && !data.password){
        return false
    }
    return true


},{message:"password is required!",path:["password"]})


export const NewPasswordSchema = z.object({
    password:z.string().min(6,{
        message:"minimum of 6 characters required"
    })
})
export const ResetSchema = z.object({
    email:z.string().email({
        message:"Email is required"
    })
})
export const LoginSchema = z.object({
    email:z.string().email({
        message:"Email is required"
    }),
    password:z.string().min(1,{
        message:"Password is required"
    }),
    code:z.optional(z.string())
})
export const RegisterSchema = z.object({
    email:z.string().email({
        message:"Email is required"
    }),
    password:z.string().min(6,{
        message:"minimum 6 characters required"
    }),
    confirmpassword:z.string().min(6,{
        message:"minimum 6 characters required"
    }),
    firstname:z.string().min(1,{
        message:"First Name is required "
    }),
    lastname:z.string().min(1,{
        message:'Last Name is required'
    })
})

export const WarehouseSchema = z.object({
    warehouse:z.string().min(4,{
        message:"minimum of 4 characters required"
    }),
    email:z.string().email({
        message:"email is required"
    }),
    phonenumber:z.string(),

    country:z.string().min(3,{
        message:"minimum of 3 characters required"
    }),
    city:z.string().min(3,{
        message:"minimum of 3 characters required"
    }),
    
    zipcode:z.string(),
    
})
export const BrandsSchema = z.object({
    brandName:z.string().min(3,{
        message:"minimum of 3 characters required"
    }),
    description:z.string().min(10,{
        message:"minimum of 10 characters required"
    })
})
export const CategorySchema = z.object({
    category:z.string().min(3,{
        message:"minimum of 3 characters required"
    }),
    description:z.string().min(10,{
        message:"minimum of 10 characters required"
    })
})
export const UnitSchema = z.object({
        unit:z.string(),
        shortName:z.string(),
        baseUnit:z.string(),
        operator:z.string(),
        operatorValue:z.string()
})