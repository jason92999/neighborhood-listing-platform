'use client';

import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

interface Service {
  id: string;
  title: string;
  hourly_rate: number;
  duration_minutes: number;
  coverage_radius_miles: number;
}

export default function ServicesCatalog() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await fetch('/api/services');

        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }

        const data: Service[] = await response.json();
        setServices(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, []);

  function handleBook(service: Service) {
    alert(`Booking selected: ${service.title}`);
  }

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">
        Local Services
      </h2>

      {loading ? (
        <p>Loading services...</p>
      ) : services.length === 0 ? (
        <p>No approved services are currently available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onBook={handleBook}
            />
          ))}
        </div>
      )}
    </section>
  );
}