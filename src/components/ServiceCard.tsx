import React from 'react';

interface Service {
  id: string;
  title: string;
  hourly_rate: number;
  duration_minutes: number;
  coverage_radius_miles: number;
}

interface ServiceCardProps {
  service: Service;
  onBook: (service: Service) => void;
}

export default function ServiceCard({ service, onBook }: ServiceCardProps) {
  return (
    <article className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white">
      <div className="p-4">
        <header>
          <h3 className="text-lg font-semibold text-gray-900">
            {service.title}
          </h3>
        </header>

        <ul className="flex flex-col gap-2 text-sm text-gray-600 border-t border-b py-3 my-3">
          <li>${service.hourly_rate.toFixed(2)} / hour</li>
          <li>{service.duration_minutes} minutes</li>
          <li>{service.coverage_radius_miles} mile coverage</li>
        </ul>

        <button
          type="button"
          onClick={() => onBook(service)}
          aria-label={`Book appointment for ${service.title}`}
          className="w-full rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
        >
          Book Now
        </button>
      </div>
    </article>
  );
}