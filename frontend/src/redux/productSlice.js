import { createAsyncThunk, createSlice, nanoid, } from '@reduxjs/toolkit';
import api from '../api/axios';

export const fatchProduct = createAsyncThunk("products", async () => {

    const respons = await api.get('/getallproduct');
    return respons.data.getallproduct;
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
        builder.addCase(fatchProduct.fulfilled, (state, action) => {
            state.status = "succesful",
                state.items = action.payload;
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