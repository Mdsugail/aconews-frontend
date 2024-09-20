import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Please enter a search term');
    } else {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-grow max-w-lg">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search news..."
        className="flex-grow border text-slate-800 p-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
      />
      <button
        type="submit"
        className="bg-white text-blue-600 p-2 rounded-r-lg hover:bg-blue-600 hover:text-white focus:ring-2 focus:ring-blue-500 shadow-md transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
