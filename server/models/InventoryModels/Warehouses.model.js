import mongoose from 'mongoose'

const WarehousesSchema = new mongoose.Schema({
    warehouse:{
        type:String,
        required:[true,"warehouse is required field"],
        unique:true
    },
    phone:{
        type:String,
        required:[true,"Phone is required field"],
        
    },
   
    country:{
        type:String,
        required:[true,"Country is required field"],
        
    },
    city:{
        type:String,
        required:[true,"City is required field"],
        
    },
    email:{
        type:String,
        required:[true,"email is required field"],
        
    },
    zipcode:{
        type:String,
        required:[true,"zipcode is required field"],
        
    },
    

})

export default mongoose.model('Warehouse',WarehousesSchema)