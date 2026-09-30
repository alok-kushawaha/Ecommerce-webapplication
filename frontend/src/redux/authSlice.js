import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/axios";

// register
export const signupuser =createAsyncThunk("signup/signupuser",async (formData,{rejectWithValue })=>{
  try {
    const respons = await api.post("/signup", formData)
    return respons.data;
  } catch (error) {
     console.log("BACKEND ERROR:", error.response?.data)
       return rejectWithValue(
        error.response?.data || { success: false, message: "Signup failed" }
      );
  }  
  
})
// register

const initialState={
    user:null,
status:undefined,
success:false,
message:"",
error:null

}
const register=createSlice({
  name:'signup',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder
      .addCase(signupuser.pending, (state) => {
         state.status = "loading";
      state.success = false;
      state.message = "";
      state.error = null;
      })

      .addCase(signupuser.fulfilled, (state, action) => {
        state.status = "success";
        state.success = action.payload.success;
        state.message=action.payload.message;
        state.user=action.payload.user
      })

      .addCase(signupuser.rejected, (state, action) => {
         state.status = "failed";

      state.success = false;

      state.error = action.payload?.message || "Signup failed";
      });
  },
})


export default register.reducer;
