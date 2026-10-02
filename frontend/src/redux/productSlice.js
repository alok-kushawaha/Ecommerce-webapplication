import { createAsyncThunk, createSlice, nanoid, } from '@reduxjs/toolkit';
import api from '../api/axios';

export const fatchProduct = createAsyncThunk("products", async (_, { rejectWithValue }) => {
    try {
        const response = await api.get('/getallproduct');
        const products = response.data?.getallproduct;
        if (!response.data?.success || !Array.isArray(products)) {
            return rejectWithValue(response.data?.message || "Unable to load products");
        }
        return products;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Unable to connect to the product service");
    }
})
export const fatchProductid = createAsyncThunk("productid", async (id) => {
    const respons = await api.get(`/getproductbyid/${id}`);
    console.log(respons.data.product)
    return respons.data.product;

})

const initialState = {
    items: [],
    selectedProduct:null,  
    status: undefined,
    error: null
}

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // builder.addCase(fatchProduct.pending,(state)=>{
        //     state.status="loading";
        // })
        builder.addCase(fatchProduct.pending, (state) => {
            state.status = "loading";
            state.error = null;
        })
        .addCase(fatchProduct.fulfilled, (state, action) => {
            state.status = "successful";
            state.items = action.payload;
        })
        .addCase(fatchProduct.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload || action.error.message;
            state.items = [];
         //   console.log(state.items)

        })
            .addCase(fatchProductid.fulfilled, (state, action) => {
                state.status = "succsess",
                    state.selectedProduct = action.payload;
            //    console.log(state.selectedProduct)
            })

    }
});
export default productsSlice.reducer;