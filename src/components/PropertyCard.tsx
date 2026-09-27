import React from 'react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white flex flex-col justify-between focus-within:ring-2 focus-within:ring-blue-500">
      <img
        src={property.imageUrl}
        alt={property.imageAlt}
        className="w-full h-48 object-cover"
      />
      
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {property.title}
          </h3>
          
          <address className="not-italic text-sm text-gray-500 mt-1 mb-2">
            {property.address}
          </address>
          
          <p className="text-xl font-bold text-gray-900 mb-3">
            ${property.price.toLocaleString()}
          </p>
          
          <ul className="flex gap-4 text-xs text-gray-600 border-t pt-3 mb-4">
            <li>{property.bedrooms} Beds</li>
            <li>|</li>
            <li>{property.bathrooms} Baths</li>
            <li>|</li>
            <li>{property.sqft.toLocaleString()} sqft</li>
          </ul>
        </div>

        <a
          href={`/properties/${property.id}`}
          className="inline-block text-center bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label={`View details for ${property.title}`}
        >
          View Details
        </a>
      </div>
    </article>
  );
}