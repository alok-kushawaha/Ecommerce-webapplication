import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api/axios';

export const fatchadminAdd = createAsyncThunk(
    "adminAdd/fatchadminAdd",
    async (productData, { rejectWithValue }) => {
        try {
            const response = await api.post("/createproduct", productData);
            if (!response.data.success) {
                return rejectWithValue(response.data.message);
            }
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Unable to create product"
            );
        }
    }
);


const initialState={
    items:null,
    status:'idle',
    message:'',
    success:false
}

const AdminSlice=createSlice({
    name:"adminAdd",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fatchadminAdd.fulfilled,(state,action)=>{
            state.status="success";
            state.success=action.payload.success;
            state.message=action.payload.message;
            state.items=action.payload.createproducts;
        })
        .addCase(fatchadminAdd.pending,(state)=>{
            state.status="loading";
            state.message='';
        })
        .addCase(fatchadminAdd.rejected,(state,action)=>{
            state.status="failed";
            state.success=false;
            state.message=action.payload || "Unable to create product";
        })
    }

})
export default AdminSlice.reducer