import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import authRoute from'./routes/authRoute.js'
import productRoute from './routes/productRoute.js'
import cartRoute from './routes/cartRoute.js'
import orderRoute from './routes/orderRoute.js'
import cors from "cors";
dotenv.config();

const app=express();
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json());


app.use('/api/v1/test',authRoute)
app.use('/api/v1/test',productRoute)
app.use('/api/v1/test',cartRoute)
app.use('/api/v1/test',orderRoute)

const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server start...${PORT}`)
})
connectDB();