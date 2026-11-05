'use client';

import { useState } from 'react';
import PropertyCard from './PropertyCard';
import { Property } from '../types/property';

interface Props {
  properties: Property[];
}

export default function PropertyListings({ properties }: Props) {
  const [maxPrice, setMaxPrice] = useState('');

  const filteredProperties = properties.filter((property) => {
    return maxPrice === '' || property.price <= Number(maxPrice);
  });

  return (
    <section aria-label="Property Listings">
      <div className="bg-gray-50 p-4 rounded-lg border mb-6">
        <label
          htmlFor="max-price"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Maximum Price
        </label>

        <div className="flex flex-col sm:flex-row gap-3">
          <select
            id="max-price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full border p-2 rounded bg-white"
          >
            <option value="">Any Price</option>
            <option value="1000000">$1,000,000</option>
            <option value="1250000">$1,250,000</option>
            <option value="1500000">$1,500,000</option>
            <option value="2000000">$2,000,000</option>
          </select>

          <button
            type="button"
            onClick={() => setMaxPrice('')}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Clear Filters
          </button>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-4">
        Showing {filteredProperties.length} of {properties.length} properties
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard
            key={property.property_id}
            property={property}
          />
        ))}
      </div>

      {filteredProperties.length === 0 && (
        <p className="text-gray-600">No properties match your filter.</p>
      )}
    </section>
  );
}