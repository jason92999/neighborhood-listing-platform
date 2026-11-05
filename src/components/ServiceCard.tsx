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
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white">
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {service.title}
        </h3>

        <p className="text-xl font-bold text-gray-900 mt-2 mb-3">
          ${service.hourly_rate.toFixed(2)} / hour
        </p>

        <ul className="flex flex-wrap gap-3 text-sm text-gray-600 border-t pt-3">
          <li>{service.duration_minutes} minutes</li>
          <li>|</li>
          <li>{service.coverage_radius_miles} mile coverage</li>
        </ul>
      </div>
    </article>
  );
}