import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema({
    category:{
        type:String,
        required:[true,"category is required field"],
        unique:true
    },
    
    description:{
        type:String,
        required:[true,"Product is required field"],
        
    },
    
})

export default mongoose.model('Product',CategorySchema)