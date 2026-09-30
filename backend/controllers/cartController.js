import cartModel from "../models/cartModel.js";


export const addtocart=async(req,res)=>{
  try {
        const {userid,productid}=req.body;
        let cart =await cartModel.findOne({userid})
        if(!cart){
            cart =new cartModel({
                userid,
                items: [{
                         productid,
                        quantity:1
                    }]
            })
        }else{
            const item = cart.items?.find(
                i => i.productid.toString() === productid

            );

         

            if(item){
                item.quantity+=1;

            }else{
                cart.items.push({
                    productid,
                    quantity:1
                })
            }

        }
        await cart.save();
        res.send({
            success:true,
            message:"product add successfully",
            cart
        })



  } catch (error) {
        res.send({
            success:false,
            message:"error in addcart api"
        })
    }
}
export const getcart = async (req, res) => {
  try {
    const { userid } = req.body;

    if (!userid) {
      return res.send({
        success: false,
        message: "User not available",
      });
    }

    const cart = await cartModel.findOne({ userid }).populate("items.productid");

    if (!cart) {
      return res.send({
        success: false,
        message: "Cart not available",
      });
    }

    return res.send({
      success: true,
      message: "Find successful",
      cart,
    });

  } catch (error) {
    console.log(error);

    return res.status(500).send({
      success: false,
      message: "Error in getcart API",
      error: error.message,
    });
  }
};
export const deletecartitem=async(req,res)=>{
 try {
    const {userid,productid}=req.body;
    if(!userid || !productid){
      return res.send({
        success:false,
        message:"cart not avilable"
      })
    }

    const cart= await cartModel.findOne({userid})
    if(!cart){
      return res.send({
        success:false,
        message:'cart nott avileable'
      })
    }
cart.items = cart.items.filter(
  (item)=> item.productid.toString() !== productid.toString()
)
//save cart
await cart.save();
res.send({
  success:true,
  message:"delete successfully",
  cart
})

 } catch (error) {
  res.send({
  success:false,
  message:"delete product api faild",
  })
 }

}
export const updatecart=async(req,res)=>{
try {
   const {userid,productid,quantity}=req.body;
  const cart =await cartModel.findOne({userid})
  if(!cart){
    return res.send({
      success:false,
      message:"cart not found"
    })
   
  }

 const item = cart.items.find((item)=>item.productid.toString() === productid);

if(!item){
return res.send({
  success:false,
  message:"product not found in cart"
})
}

if(quantity<1){
  return res.send({
    success:false,
   message:"quanitity atlist 1"
  })
}
item.quantity=quantity;
await cart.save();
res.send({
  success:true,
  message:"successfully",
  cart
})
} catch (error) {
  res.send({
    success:false,
    message:"error in up date api "
  })
}
  
 
}