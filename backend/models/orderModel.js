import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    items:[{
            productid: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'product',
                required: true
            },
            quantity: {
                type: Number,
                default: 1
    
            },
            price:{
                type:Number,
                required:true
            }
        }
        ],
        totalAmount:{
             type:Number,
                required:true
        },
        shippingAddress:{
            address:String,
            city:String,
            pincode:String
        }
        


},{timestamps:true})
export default mongoose.model('order',orderSchema)