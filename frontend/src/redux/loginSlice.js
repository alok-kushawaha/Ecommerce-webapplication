import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/axios";


export const loginuser = createAsyncThunk("signup/loginuser", async (loginData, { rejectWithValue }) => {
  try {
    const res = await api.post("/login", loginData);
    if (!res.data.success) {
      return rejectWithValue(res.data);
    }
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || { success: false, message: "Login failed" });
  }
});



// login

const loginSlice=createSlice({
  name:"login",
  initialState:{
    token:localStorage.getItem("token"),
    userid:localStorage.getItem('userid'),
    user: (() => {
      try {
        return JSON.parse(localStorage.getItem("user") || "null");
      } catch {
        return null;
      }
    })(),
    role:localStorage.getItem("role"),
    loading:false,
    status:undefined,
    
    error:null
  },
  reducers:{
    logout:(state)=>{
      state.user=null;
      state.token=null;
      state.userid=null;
      state.role=null;
      state.error=null;
      state.status=undefined;
      localStorage.removeItem("token");
      localStorage.removeItem("userid");
      localStorage.removeItem("user");
      localStorage.removeItem("role");
    },
    updateUserProfile:(state, action)=>{
      const updatedUser = action.payload;
      state.user = updatedUser;
      if (updatedUser) {
        localStorage.setItem("user", JSON.stringify(updatedUser));
      }
    }
  },
  extraReducers:(builder)=>{
    builder
      .addCase(loginuser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginuser.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "succsess";
        state.token = action.payload.token;
        state.userid=action.payload.userid;
        state.user = action.payload.user || action.payload;
        state.role = action.payload.user?.role || action.payload.role || null;

        if (action.payload.token && action.payload.userid) {
          localStorage.setItem("token", action.payload.token);
          localStorage.setItem("userid",action.payload.userid)
          localStorage.setItem("user", JSON.stringify(state.user));
          if (state.role) localStorage.setItem("role", state.role);
        }
      })
      .addCase(loginuser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Something went wrong";
      })
  }
})
// login


export const { logout, updateUserProfile } = loginSlice.actions;
export default loginSlice.reducer;