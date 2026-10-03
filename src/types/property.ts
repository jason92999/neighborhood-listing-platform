export interface Sponsor {
sponsor_id: string;
name: string;
category: string;
}

export interface Property {
property_id: string;
address: string;
city: string;
state: "CA";
zip_code: string;
price: number;
bedrooms: number;
bathrooms: number;
square_feet: number;
amenities: string[];
local_sponsors: Sponsor[];
}
