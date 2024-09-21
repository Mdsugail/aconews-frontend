import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsFeed from './components/NewsFeed';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import Pagination from './components/Pagination';

const App = () => {
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    country: '',
    language: 'en',
  });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchNews = async () => {
      const apiUrl = isSearchMode 
        ? `${process.env.REACT_APP_BACKEND_URL}/search` 
        : `${process.env.REACT_APP_BACKEND_URL}/headlines`;

      try {
        const response = await axios.get(apiUrl, {
          params: {
            q: query,
            category: filters.category,
            country: filters.country,
            language: filters.language,
            page: page,
          },
        });

        setArticles(response.data.data.articles);
        const totalResults = response.data.data.totalArticles;
        setTotalPages(Math.ceil(totalResults / 10));
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [query, filters, page, isSearchMode]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
    setIsSearchMode(true);
  };

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
    setPage(1);
  };

  const handleClearFilters = () => {
    setFilters({
      category: '',
      country: '',
      language: 'en',
    });
    setPage(1);
    setQuery('');
    setIsSearchMode(false);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="app bg-gray-100">
      <div className="app container mx-auto p-4">
        {/* Header */}
        <div className="sticky top-0 z-30 bg-blue-600 rounded-lg p-4 text-white font-bold shadow-lg flex flex-col sm:flex-row items-center justify-between">
          <h1 className="text-3xl font-extrabold mb-4 sm:mb-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-400">ACONEWS</h1>
          <div className="w-full sm:w-3/4 md:w-2/3 lg:w-auto xl:w-2/5">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>

        {/* Filters */}
        <Filters
          onFilterChange={handleFilterChange}
          filters={filters}
          onClearFilters={handleClearFilters}
        />

        {/* News Feed */} 
        <div className='bg-gray-100'>
          <div className="bg-white bg-opacity-75 rounded-lg p-6 mb-8 shadow-lg">
            <NewsFeed articles={articles} />
          </div>
        </div>

        {/* Pagination */}
        <div className="bg-violet-300 rounded-lg p-4 shadow-lg">
          <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
};

export default App;
