import React from 'react';
import { Product } from '../../types/product';
import { FaStar } from "react-icons/fa";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = React.memo(({ product }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative h-48 md:h-64 w-full flex items-center justify-center p-4">
        <img 
          src={product.image} 
          alt={product.title} 
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white truncate" title={product.title}>
          {product.title}
        </h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xl font-bold text-green-600 dark:text-green-400">
            ${product.price.toFixed(2)}
          </span>
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <FaStar 
                key={index} 
                className={`h-5 w-5 ${
                  index < Math.floor(product.rating.rate) 
                    ? 'text-yellow-400' 
                    : 'text-gray-300 dark:text-gray-600'
                }`}
                fill={index < Math.floor(product.rating.rate) ? 'currentColor' : 'none'}
              />
            ))}
            <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">
              ({product.rating.rate.toFixed(1)})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProductCard;