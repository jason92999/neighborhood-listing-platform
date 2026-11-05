import { SponsorBanner } from '@/components/SponsorBanner';
import PropertyListings from '@/components/PropertyListings';
import properties from '@/data/generated/properties-valid.json';
import { sampleSponsor } from '@/data/properties';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Neighborhood Listings
      </h1>

      <SponsorBanner sponsor={sampleSponsor} />

      <PropertyListings properties={properties} />
    </main>
  );
}