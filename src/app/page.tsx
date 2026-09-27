import PropertyCard from '@/components/PropertyCard';
import { SponsorBanner } from '@/components/SponsorBanner';
import { SearchFilters } from '@/components/SearchFilters';
import { sampleProperties, sampleSponsor } from '@/data/properties';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Neighborhood Listings
      </h1>

      <SearchFilters />
      
      <SponsorBanner sponsor={sampleSponsor} />

      <section aria-label="Property Listings">
        <h2 className="sr-only">Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </main>
  );
}