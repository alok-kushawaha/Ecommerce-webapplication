import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/axios";

export const fatchcart=createAsyncThunk("cart/fatchcart",async()=>{
    const userid=localStorage.getItem("userid");
    if (!userid) return [];

    const res=await api.post("/getcart",{userid});
    return res.data.cart?.items || [];
});

export const addToCart=createAsyncThunk("cart/addToCart",async(productid,{rejectWithValue})=>{
    const userid=localStorage.getItem("userid");
    if (!userid) {
        return rejectWithValue("Please log in to add items to your cart");
    }

    try {
        const addResponse=await api.post("/addtocart",{userid,productid});
        if (!addResponse.data.success) {
            return rejectWithValue(addResponse.data.message || "Unable to add item to cart");
        }

        const cartResponse=await api.post("/getcart",{userid});
        if (!cartResponse.data.success) {
            return rejectWithValue(cartResponse.data.message || "Unable to refresh cart");
        }
        return cartResponse.data.cart?.items || [];
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Unable to add item to cart");
    }
});

export const fatchcartdelete=createAsyncThunk("cart/fatchcartdelete",async({userid,productid})=>{
    const res = await api.post("/deletecart",{userid,productid})
    if (!res.data.success) {
        throw new Error(res.data.message || "Unable to remove item from cart");
    }
    return productid;
});
/////updatecart
export const fatchupdatecart=createAsyncThunk("cart/fatchupdatecart",async({userid,productid,quantity})=>{
    const res = await api.put("/updatecart",{userid,productid,quantity})
    if (!res.data.success) {
        throw new Error(res.data.message || "Unable to remove item from cart");
    }
    return { productid, quantity };
});
////updatecart



const initialState={
    items:[],
    status:undefined,
    error:null
}

const cartSlice =createSlice({
    name:'cart',
    initialState,
    reducers:{
         clearCart: () => initialState,
      
    },
    extraReducers:(builder)=>{
        builder.addCase(fatchcart.pending,(state)=>{
            state.status="loading";
        });
        builder.addCase(fatchcart.fulfilled,(state,action)=>{
            state.status="success";
            state.items = action.payload || [];
        });
        builder.addCase(fatchupdatecart.fulfilled,(state,action)=>{
            state.status="success";
            state.items = state.items.map((item) => {
                const itemProductId = item.productid?._id ?? item.productid;
                return itemProductId === action.payload.productid
                    ? { ...item, quantity: action.payload.quantity }
                    : item;
            });
        });
        builder.addCase(fatchcartdelete.fulfilled,(state,action)=>{
            state.items = state.items.filter(
                item => (item.productid?._id ?? item.productid) !== action.payload
            );
        });
        builder.addCase(addToCart.pending,(state)=>{
            state.status="adding";
            state.error=null;
        });
        builder.addCase(addToCart.fulfilled,(state,action)=>{
            state.items=action.payload;
            state.status="success";
        });
        builder.addCase(addToCart.rejected,(state,action)=>{
            state.status="failed";
            state.error=action.payload || action.error.message;
        });
    }
})
export const {addItem,removeItem,clearCart }=cartSlice.actions;
export default cartSlice.reducer
