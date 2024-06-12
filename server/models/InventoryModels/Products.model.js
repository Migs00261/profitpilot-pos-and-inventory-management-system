import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    product:{
        type:String,
        required:[true,"Product is required field"],
        unique:true
    },
    image:{
        type:String,
        required:[true,"Image is required field"],
        
    },
    type:{
        type:String,
        required:[true,"type is required field"],
        enum:['single type','variant type']
    },
    category:{
        type:String,
        required:[true,"Product is required field"],
        
    },
    brand:{
        type:String,
        required:[true,"Product is required field"],
        
    },
    salePrice:{
        type:Number,
        required:[true,"salePrice is required field"],
        
    },
    purchasePrice:{
        type:Number,
        required:[true,"purchasePrice is required field"],
        
    },
    stockUnit:{
        type:Number,
        required:[true,"salePrice is required field"],
        
    },
    warehouse:{
        type:String,
        required:[true,"salePrice is required field"],
        
    },

})

export default mongoose.model('Product',ProductSchema)