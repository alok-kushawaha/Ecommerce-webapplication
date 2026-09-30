import mongoose from "mongoose";


const cartSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true

    },
    items: [{
        productid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product',
            required: true
        },
        quantity: {
            type: Number,
            default: 1

        },
    }
    ]
},{timestamps:true})
export default mongoose.model('cart', cartSchema)