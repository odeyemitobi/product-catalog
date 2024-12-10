// src/types/product.ts
export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }
  
  export interface ProductState {
    products: Product[];
    filteredProducts: Product[];
    searchTerm: string;
    loading: boolean;
    error: string | null;
  }
  
  export interface RootState {
    products: ProductState;
  }