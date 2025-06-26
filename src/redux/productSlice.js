import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../api/api";
const initialState = {
  data: [],
  isLoading: false,
  error: false,
};
export const fetchProduct = createAsyncThunk(
  "fetchProduct",
  async (_, thunkAPI) => { // params talab qilinmaydi
    try {
      const res = await api.get("/products");
      console.log("✅ API response for GET /products:", res.data);
      // faraz qilaylik res.data.contents yoki res.data.products kabi tuzilma bor:
      return res.data.contents ?? res.data.products ?? [];
    } catch (err) {
      console.error("❌ fetchProduct error", err);
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.error = true;
    });
  },
});
export default productSlice.reducer;
