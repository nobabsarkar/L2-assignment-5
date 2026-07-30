export interface IProperty {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  images: string[];
  landlordId: string;
  categoryId: string;
  createdAt: string;
  updatedAt: string;
}
