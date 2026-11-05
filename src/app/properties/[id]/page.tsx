import { notFound } from "next/navigation";
import Link from "next/link";
import properties from "@/data/generated/properties-valid.json";

export default async function PropertyDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const property = properties.find(
    (item) => item.property_id === id
  );

  if (!property) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/" className="text-blue-600 underline">
        Back to Listings
      </Link>

      <div className="border rounded-xl p-6 mt-6 bg-white shadow-sm">
        <h1 className="text-3xl font-bold mb-4">
          {property.address}
        </h1>

        <p className="text-gray-600 mb-4">
          {property.city}, {property.state} {property.zip_code}
        </p>

        <p className="text-2xl font-bold mb-6">
          ${property.price.toLocaleString()}
        </p>

        <div className="grid grid-cols-3 gap-4 border-y py-4 mb-6">
          <p>{property.bedrooms} Beds</p>
          <p>{property.bathrooms} Baths</p>
          <p>{property.square_feet.toLocaleString()} sqft</p>
        </div>

        <h2 className="text-xl font-bold mb-3">Amenities</h2>

        <ul className="list-disc pl-6 mb-6">
          {property.amenities.map((amenity) => (
            <li key={amenity}>{amenity}</li>
          ))}
        </ul>

        <h2 className="text-xl font-bold mb-3">Local Sponsors</h2>

        <ul className="list-disc pl-6">
          {property.local_sponsors.map((sponsor) => (
            <li key={sponsor.sponsor_id}>
              {sponsor.name} - {sponsor.category}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}