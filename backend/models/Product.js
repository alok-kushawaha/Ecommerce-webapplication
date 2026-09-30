import mongoose, { model, Types } from "mongoose";

const productSchema = new mongoose.Schema({

    title:{
        required:true,
        type:String
    },
    brand:{

        type:String
    },
    price: {
        required:true,
        type:String
    },
    description:{

        type: String
    },
    category:{
        type:String
    },
    rating:{
        type:String
    },
    stock:{
        required:true,
        type:String
    },
    image:{
        required:true,
        type:String
    }

})

export default mongoose.model('product',productSchema);