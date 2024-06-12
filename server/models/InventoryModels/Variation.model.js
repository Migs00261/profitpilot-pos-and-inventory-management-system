import mongoose from 'mongoose'

const VariationSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Product is required field"],
        unique:true
    },
    values:{
        type:Array,
        required:[true,"Values is required field"],
        
    },
   

})

export default mongoose.model('Variation',VariationSchema)