import React from 'react';

const Filters = ({ onFilterChange, filters, onClearFilters}) => {
  
  return (
    <div className="sticky top-[4.5rem] z-10 mb-6 p-4 bg-blue-100 rounded-lg shadow-md">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:flex lg:space-x-4">
        
        {/* Categories Dropdown */}
        <select
          value={filters.category}
          onChange={(e) => onFilterChange('category', e.target.value)}
          className=" font-sans border p-2 rounded-md bg-white shadow-sm hover:bg-violet-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition w-full"
        >
          <option value="">All Categories</option> {/* Value is empty for All Categories */}
          <option value="general">General</option>
          <option value="world">World</option>
          <option value="nation">Nation</option>
          <option value="business">Business</option>
          <option value="technology">Technology</option>
          <option value="entertainment">Entertainment</option>
          <option value="sports">Sports</option>
          <option value="science">Science</option>
          <option value="health">Health</option>
        </select>

        {/* Countries Dropdown */}
        <select
          value={filters.country}
          onChange={(e) => onFilterChange('country', e.target.value)}
          className="border p-2 rounded-md bg-white shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition w-full"
        >
          <option value="">All Countries</option> {/* Value is empty for All Countries */}
          <option value="au">Australia</option>
          <option value="br">Brazil</option>
          <option value="ca">Canada</option>
          <option value="cn">China</option>
          <option value="eg">Egypt</option>
          <option value="fr">France</option>
          <option value="de">Germany</option>
          <option value="gr">Greece</option>
          <option value="hk">Hong Kong</option>
          <option value="in">India</option>
          <option value="ie">Ireland</option>
          <option value="il">Israel</option>
          <option value="it">Italy</option>
          <option value="jp">Japan</option>
          <option value="nl">Netherlands</option>
          <option value="no">Norway</option>
          <option value="pk">Pakistan</option>
          <option value="pe">Peru</option>
          <option value="ph">Philippines</option>
          <option value="pt">Portugal</option>
          <option value="ro">Romania</option>
          <option value="ru">Russian Federation</option>
          <option value="sg">Singapore</option>
          <option value="es">Spain</option>
          <option value="se">Sweden</option>
          <option value="ch">Switzerland</option>
          <option value="tw">Taiwan</option>
          <option value="ua">Ukraine</option>
          <option value="gb">United Kingdom</option>
          <option value="us">United States</option>
        </select>

        {/* Languages Dropdown */}
        <select
          value={filters.language}
          onChange={(e) => onFilterChange('language', e.target.value)}
          className="border p-2 rounded-md bg-white shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition w-full"
        >
          <option value="">All Languages</option> {/* Value is empty for All Languages */}
          <option value="ar">Arabic</option>
          <option value="zh">Chinese</option>
          <option value="nl">Dutch</option>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="el">Greek</option>
          <option value="he">Hebrew</option>
          <option value="hi">Hindi</option>
          <option value="it">Italian</option>
          <option value="ja">Japanese</option>
          <option value="ml">Malayalam</option>
          <option value="mr">Marathi</option>
          <option value="no">Norwegian</option>
          <option value="pt">Portuguese</option>
          <option value="ro">Romanian</option>
          <option value="ru">Russian</option>
          <option value="es">Spanish</option>
          <option value="sv">Swedish</option>
          <option value="ta">Tamil</option>
          <option value="te">Telugu</option>
          <option value="uk">Ukrainian</option>
        </select>
      </div>

      <div className="mt-4 flex justify-end">
        <button
          onClick={onClearFilters}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
