import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store";
import {
  fetchProducts,
  setSearchTerm,
  sortProductsByPrice,
  sortProductsByRating,
} from "../../store/productSlice";
import ProductCard from "./product-card";
import { IoSearch } from "react-icons/io5";
import { TbSortAscending } from "react-icons/tb";
import { HiSortDescending } from "react-icons/hi";

const ProductListing: React.FC = () => {
  const dispatch = useAppDispatch();
  const { filteredProducts, loading, error, searchTerm } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handlePriceSort = () => {
    dispatch(sortProductsByPrice("asc"));
  };

  const handleRatingSort = () => {
    dispatch(sortProductsByRating("desc"));
  };

  if (loading)
    return <div className="text-center text-xl py-10">Loading products...</div>;
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
            className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
          <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handlePriceSort}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            <TbSortAscending className="mr-2" /> Sort by Price
          </button>
          <button
            onClick={handleRatingSort}
            className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            <HiSortDescending className="mr-2" /> Sort by Rating
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
