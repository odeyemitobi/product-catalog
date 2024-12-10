import React from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { setCurrentPage } from "../../store/productSlice";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Pagination: React.FC = () => {
  const dispatch = useAppDispatch();
  const { filteredProducts, currentPage, productsPerPage } = useAppSelector(
    (state) => state.products
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const generatePageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center space-x-2 mt-6">
      <button
        title="Previous Page"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={isPreviousDisabled}
        className={`
          p-2 rounded-lg 
          ${
            isPreviousDisabled
              ? "text-gray-300 cursor-not-allowed"
              : "hover:bg-gray-100 text-gray-700 dark:text-white dark:hover:bg-gray-700"
          }
        `}
      >
        <FaChevronLeft className="w-5 h-5" />
      </button>

      {/* Page Numbers */}
      {generatePageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`
            w-10 h-10 rounded-lg
            ${
              currentPage === page
                ? "bg-[#E85D04] text-white"
                : "text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            }
          `}
        >
          {page}
        </button>
      ))}

      <button
        title="Next Page"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={isNextDisabled}
        className={`
          p-2 rounded-lg 
          ${
            isNextDisabled
              ? "text-gray-300 cursor-not-allowed"
              : "hover:bg-gray-100 text-gray-700 dark:text-white dark:hover:bg-gray-700"
          }
        `}
      >
        <FaChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Pagination;
