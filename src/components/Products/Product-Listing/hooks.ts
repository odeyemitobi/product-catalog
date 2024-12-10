import { useState } from 'react';
import { useAppDispatch } from '../../../store';
import { 
  sortProductsByPrice, 
  sortProductsByRating 
} from '../../../store/productSlice';

export const useProductSort = () => {
  const dispatch = useAppDispatch();
  const [priceSortOrder, setPriceSortOrder] = useState<'asc' | 'desc'>('asc');
  const [ratingSortOrder, setRatingSortOrder] = useState<'asc' | 'desc'>('desc');

  const handlePriceSort = () => {
    const newOrder = priceSortOrder === 'asc' ? 'desc' : 'asc';
    setPriceSortOrder(newOrder);
    dispatch(sortProductsByPrice(newOrder));
  };

  const handleRatingSort = () => {
    const newOrder = ratingSortOrder === 'asc' ? 'desc' : 'asc';
    setRatingSortOrder(newOrder);
    dispatch(sortProductsByRating(newOrder));
  };

  return {
    priceSortOrder,
    ratingSortOrder,
    handlePriceSort,
    handleRatingSort
  };
};