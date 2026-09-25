import React from 'react';
import { Sponsor } from '../types';

export const SponsorBanner: React.FC<{ sponsor: Sponsor }> = ({ sponsor }) => {
  return (
    <aside className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-lg my-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-200 px-2.5 py-0.5 rounded">
          Sponsored
        </span>
        <h4 className="text-lg font-bold text-gray-900 mt-2">
          {sponsor.businessName}
        </h4>
        <p className="text-sm text-gray-700 mt-1">
          {sponsor.description}
        </p>
      </div>
      
      <a
        href={sponsor.linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold text-blue-600 underline hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        aria-label={`Visit ${sponsor.businessName} (opens in a new tab)`}
      >
        Learn More
      </a>
    </aside>
  );
};