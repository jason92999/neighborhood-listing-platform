export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-5xl mx-auto">
      <header className="mb-8 border-b pb-6">
        <h1 className="text-3xl font-bold text-gray-900">Neighborhood Property Listing Platform</h1>
        <p className="mt-2 text-gray-600">
          A platform for exploring local property listings, engaging community sponsors, and accessing interactive voice assistance.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-bold text-blue-600 mb-2">1. Property Listings</h2>
          <p className="text-gray-600 text-sm">
            Browse and filter available homes, condos, and local real estate within your neighborhood.
          </p>
        </div>

        <div className="border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-bold text-green-600 mb-2">2. Neighborhood Sponsors</h2>
          <p className="text-gray-600 text-sm">
            Discover local businesses and community partners supporting the neighborhood platform.
          </p>
        </div>

        <div className="border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-bold text-purple-600 mb-2">3. Voice Help</h2>
          <p className="text-gray-600 text-sm">
            Interact with AI-driven voice assistance to navigate listings and answer property questions.
          </p>
        </div>
      </section>
    </main>
  );
}
