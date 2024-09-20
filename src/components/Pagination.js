import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination flex justify-center space-x-4 mt-4">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="bg-blue-700 font-semibold text-white p-2 rounded disabled:opacity-50 hover:bg-sky-600"
      >
        Previous
      </button>
      <span className="p-2">Page {currentPage} of {totalPages}</span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="bg-blue-700 px-5 font-semibold text-white p-2 rounded disabled:opacity-50 hover:bg-sky-600"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
