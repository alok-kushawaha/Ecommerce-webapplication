import Product from '../models/Product.js'

export const productCreate = async (req, res) => {
    try {
        const { title, brand, price, description, category, rating, stock, image } = req.body;
        if (!title || !price || !stock) {
            return res.send({
                success: false,
                message: "provide these nessasry field"
            })
        }
        const createproducts = await Product.create({
            title,
            brand,
            price,
            description,
            category,
            rating,
            stock,
            image
        })
        res.send({
            success: true,
            message: "product create succesfully",
            createproducts
        })

    } catch (error) {
        res.send({
            success: false,
            message: "error in create ptoduct api"
        })
    }

}

export const updateProduct = async (req, res) => {
    try {
        const productid = req.params.id
        if (!productid) {
            return res.send({
                success: "false",
                message: "product not avilable"
            })
        }

        const products = await Product.findById(productid)
        if (!products) {
            return res.send({
                success: "false",
                message: "product not avilable"
            })
        }

        const { title, brand, price, description, category, rating, stock, image } = req.body;
        const updateProduct = await Product.findByIdAndUpdate(productid, {
            title,
            brand,
            price,
            description,
            category,
            rating,
            stock,
            image



        })
        res.send({
            success: true,
            message: "updated successfully"
        })

    } catch (error) {
        res.send({
            success: false,
            message: "error in update ptoduct api"
        })
    }

}

export const deleteProduct = async (req, res) => {
    try {
        const productid = req.params.id
        if (!productid) {
            return res.send({
                success: "false",
                message: "product not avilable"
            })
        }
        const products = await Product.findByIdAndDelete(productid)
        res.send({
            success:true,
            message:"delete succesfully"
        })

    } catch (error) {
   res.send({
    success:false,
    message:"error in delete product api"
   })
    }

}
export const getallproduct =async(req,res)=>{
  try {
      const getallproduct =await Product.find()
      if(!getallproduct){
       return res.send({
        success:false,
        message:"product not avilable",

    })
      }
    res.send({
        success:true,
        message:"get all product successfully",
        getallproduct
    })
  } catch (error) {
     res.send({
        success:false,
        message:"error in get aall product"
    })
  }
}
export const getProductbyid=async(req,res)=>{
    try {
         const productid=req.params.id
         if(!productid){
            return res.send({
                success:false,
                message:"provide product id"
            })
         }
         const product=await Product.findById(productid)
         if(!product){
            return res.send({
                success:false,
                message:"product not found"
            })
         }
         res.send({
            success:true,
            message:"get product product",
            product
         })
  } catch (error) {
        res.send({
            success:false,
            message:"error in get  product",

         })
    }
    
}