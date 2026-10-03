import PropertyCard from '@/components/PropertyCard';
import properties from '@/data/generated/properties-valid.json';

export default function LabPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Property Listings
      </h1>

      <section aria-label="Property Listings">
        <h2 className="sr-only">Properties</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.property_id} property={property} />
          ))}
        </div>
      </section>
    </main>
  );
}