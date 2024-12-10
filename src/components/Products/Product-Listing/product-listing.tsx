import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../store";
import {
  fetchProducts,
  setSearchTerm,
} from "../../../store/productSlice";
import { useProductSort } from './hooks';
import ProductCard from "../Product-Card/product-card";
import Loader from "../../Loader"; 
import { IoSearch } from "react-icons/io5";
import { TbSortAscending, TbSortDescending } from "react-icons/tb";

const ProductListing: React.FC = () => {
  const dispatch = useAppDispatch();
  const { filteredProducts, loading, error, searchTerm } = useAppSelector(
    (state) => state.products
  );

  const {
    priceSortOrder,
    ratingSortOrder,
    handlePriceSort,
    handleRatingSort
  } = useProductSort();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  if (loading)
    return <Loader />;
  if (error)
    return <div className="text-center text-red-500 py-10">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-[#17181A] dark:text-white dark:border-transparent focus:outline-none"
          />
          <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handlePriceSort}
            className="flex items-center px-4 py-2 bg-[#E85D04] rounded-xl"
          >
            {priceSortOrder === 'asc' ? (
              <TbSortAscending className="mr-2" />
            ) : (
              <TbSortDescending className="mr-2" />
            )}{' '}
            Sort by Price
          </button>
          <button
            onClick={handleRatingSort}
            className="flex items-center px-4 py-2 bg-[#E85D04] rounded-xl"
          >
            {ratingSortOrder === 'asc' ? (
              <TbSortAscending className="mr-2" />
            ) : (
              <TbSortDescending className="mr-2" />
            )}{' '}
            Sort by Rating
          </button>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center text-xl text-gray-500 py-10">
          No products found
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductListing;