import orderModel from "../models/orderModel.js";
import cartModel from "../models/cartModel.js";
import Product from "../models/Product.js";
export  const placeorder = async(req, res) => {
   try {
        const { userid, shippingAddress } = req.body;
        const cart = await cartModel.findOne({ userid }).populate("items.productid")
        if (!cart || cart.items.length === 0) {
            return res.send({

                success: false,
                message: "cart is empty"

            })
        }
        let totalAmount = 0
        const orderitem = cart.items.map((item) => {
            const price = item.productid.price;
            const quantity=item.quantity
            totalAmount += price * quantity;
                return {
        productid: item.productid._id,
        quantity: quantity,
        price: price
      };
        });

        //create order
        const order = await orderModel.create({
            userid,
            items: orderitem,
            totalAmount,
            shippingAddress,


        });
        //clear cart
        cart.items = []
        await cart.save();
        res.send({
            success: true,
            message: "order place successful",
            order

        })
   } catch (error) {
        res.send({
            success: false,
            message: "error in order place successful"

        })
   }



}
//single order

export const getOrder =async(req,res) =>{
    try {
        
    const {orderid}=req.params;
const singleorder = await orderModel.findById(orderid).populate("items.productid")

    if(!singleorder){
        return res.send({
            success:false,
            message:"order not avilable"
        })
    }
    res.send({
        success:true,
        message:"your order",
        singleorder
    })
    } catch (error) {
         res.send({
        success:false,
        message:"error in single order",
        singleorder
    })
    }

}