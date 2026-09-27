import { Property, Sponsor } from '../types';

export const sampleProperties: Property[] = [
  {
    id: 'prop-1',
    title: 'Modern Suburban Home',
    address: '123 Maple Street, Los Angeles, CA',
    price: 750000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2400,
    imageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500',
    imageAlt: 'Front view of a two-story modern suburban house with green lawn',
  },
  {
    id: 'prop-2',
    title: 'Downtown Luxury Apartment',
    address: '456 Grand Ave, Los Angeles, CA',
    price: 520000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1100,
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500',
    imageAlt: 'High-rise luxury apartment building with modern glass facade',
  },
  {
    id: 'prop-3',
    title: 'Cozy Neighborhood Condo',
    address: '789 Oak Lane, Los Angeles, CA',
    price: 430000,
    bedrooms: 2,
    bathrooms: 1,
    sqft: 950,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500',
    imageAlt: 'Exterior view of a cozy white neighborhood condominium',
  },
];

export const sampleSponsor: Sponsor = {
  id: 'spon-1',
  businessName: 'Apex Home Mortgages',
  description: 'Get low rates on your home mortgage today with fast approval.',
  imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500',
  imageAlt: 'Apex Home Mortgages office building',
  linkUrl: 'https://example.com/mortgages',
};
