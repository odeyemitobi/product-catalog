import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product, ProductState } from '../types/product';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
      return response.data;
    } catch {
      return rejectWithValue('Failed to fetch products');
    }
  }
);

const initialState: ProductState = {
  products: [],
  filteredProducts: [],
  searchTerm: '',
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      state.filteredProducts = state.products.filter(product => 
        product.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    sortProductsByPrice: (state, action: PayloadAction<'asc' | 'desc'>) => {
      const sortedProducts = [...state.filteredProducts].sort((a, b) => 
        action.payload === 'asc' ? a.price - b.price : b.price - a.price
      );
      state.filteredProducts = sortedProducts;
    },
    sortProductsByRating: (state, action: PayloadAction<'asc' | 'desc'>) => {
      const sortedProducts = [...state.filteredProducts].sort((a, b) => 
        action.payload === 'asc' ? a.rating.rate - b.rating.rate : b.rating.rate - a.rating.rate
      );
      state.filteredProducts = sortedProducts;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { 
  setSearchTerm, 
  sortProductsByPrice, 
  sortProductsByRating 
} = productSlice.actions;

export default productSlice.reducer;