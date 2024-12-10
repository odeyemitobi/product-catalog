
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import productReducer from './productSlice';
import { RootState } from '../types/product';

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

// Typed hooks for better type inference
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;