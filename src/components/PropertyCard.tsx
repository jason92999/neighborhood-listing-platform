import { Property } from "@/data/properties";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white">
      <img src={property.imageUrl} alt={property.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-xl font-bold text-gray-900">${property.price.toLocaleString()}</p>
        <h2 className="text-lg font-semibold mt-1">{property.title}</h2>
        <p className="text-sm text-gray-500 mt-1">{property.address}</p>
        <div className="flex gap-4 mt-3 text-xs text-gray-600 border-t pt-3">
          <span>{property.beds} Beds</span>
          <span>|</span>
          <span>{property.baths} Baths</span>
          <span>|</span>
          <span>{property.sqft.toLocaleString()} sqft</span>
        </div>
      </div>
    </div>
  );
}
