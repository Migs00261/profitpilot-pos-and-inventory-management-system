import mongoose from 'mongoose'

const BrandSchema = new mongoose.Schema({
    brand:{
        type:String,
        required:[true,"brand is required field"],
        unique:true
    },
    image:{
        type:String,
        required:[true,"Image is required field"],
        
    },
    
    description:{
        type:String,
        required:[true,"description is required field"],
        
    },

})

export default mongoose.model('Brand',BrandSchema)