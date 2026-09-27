export interface Property {
  id: string;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  imageUrl: string;
  imageAlt: string;
}

export interface Sponsor {
  id: string;
  businessName: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  linkUrl: string;
}