import Link from 'next/link';
import { sampleSponsor } from '@/data/properties';

export default function SponsorPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/" className="text-blue-600 underline">
        Back to Listings
      </Link>

      <div className="border rounded-xl p-6 mt-6 bg-white shadow-sm">
        <span className="text-xs font-bold uppercase text-amber-800 bg-amber-200 px-3 py-1 rounded">
          Sponsored
        </span>

        <h1 className="text-3xl font-bold mt-4">
          {sampleSponsor.businessName}
        </h1>

        <p className="text-gray-700 mt-4">
          {sampleSponsor.description}
        </p>

        <h2 className="text-xl font-bold mt-6">
          About This Sponsor
        </h2>

        <p className="text-gray-600 mt-2">
          {sampleSponsor.businessName} is a featured sponsor of Neighborhood Listings.
          Learn more about their services and explore their information here.
        </p>
      </div>
    </main>
  );
}