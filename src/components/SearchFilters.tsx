import React from 'react';

export const SearchFilters: React.FC = () => {
  return (
    <form
      className="bg-gray-50 p-4 rounded-lg border mb-6 grid grid-cols-1 md:grid-cols-3 gap-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <label
          htmlFor="property-type"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Property Type
        </label>
        <select
          id="property-type"
          className="w-full border p-2 rounded focus-visible:ring-2 focus-visible:ring-blue-500 bg-white"
        >
          <option value="">All Types</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="condo">Condo</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="max-price"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Max Price
        </label>
        <select
          id="max-price"
          className="w-full border p-2 rounded focus-visible:ring-2 focus-visible:ring-blue-500 bg-white"
        >
          <option value="">Any Price</option>
          <option value="500000">$500,000</option>
          <option value="750000">$750,000</option>
          <option value="1000000">$1,000,000</option>
        </select>
      </div>

      <div className="flex items-end">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 font-medium focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          Apply Filters
        </button>
      </div>
    </form>
  );
};