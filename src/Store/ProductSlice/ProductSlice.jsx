import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../AxiosConfig/AxiosConfig'; // Import Axios instance

// Async action to fetch products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axiosInstance.get('/products');
  return response.data;
});

// Initial state
const initialState = {
  items: [],
  isLoading: false,
  error: null
};

// Create the slice
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  }
});

export default productSlice.reducer;
