import jwt from 'jsonwebtoken'

export const userauth= (req,res,next)=>{


try {
    const token =req.header('Authorization').split(" ")[1];
jwt.verify(token,process.env.JWT_SECRET,(err,decode)=>{
    if(err){
        return res.send({
            success:false,
            message:"UN_authorized"
        })
    }else{
        if(!req.body){
            req.body={};

        }
        req.user=decode;
next();
    }
}); 




    
} catch (error) {
     return res.send({message:'err in API route',success:false})
}
}

export const isAdmin=(req,res,next)=>{

    if(req.user?.role !== "admin"){
        return res.send({
            success:false,
            message:'only admin can access'

        })
    }
    next();

}