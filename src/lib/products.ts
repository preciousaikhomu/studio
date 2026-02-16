export type Product = {
  id: string;
  name: string;
  category: 'Adire' | 'Fragrances' | 'Drinks' | 'Essentials';
  imageId: string;
};

export const products: Product[] = [
  { id: '1', name: 'Indigo Adire Tunic', category: 'Adire', imageId: 'adire-1' },
  { id: '2', name: 'Sunset Orange Bubu', category: 'Adire', imageId: 'adire-2' },
  { id: '3', name: 'Royal Purple Adire', category: 'Adire', imageId: 'adire-3' },
  { id: '4', name: 'Oud Majesty Perfume', category: 'Fragrances', imageId: 'perfume-1' },
  { id: '5', name: 'Fresh Bloom Body Mist', category: 'Fragrances', imageId: 'perfume-2' },
  { id: '6', name: 'Signature Scent Collection', category: 'Fragrances', imageId: 'perfume-3' },
  { id: '7', name: 'Classic Hibiscus Zobo', category: 'Drinks', imageId: 'drink-1' },
  { id: '8', name: 'Creamy Tigernut Milk', category: 'Drinks', imageId: 'drink-2' },
  { id: '9', name: 'Spiced Zobo Drink', category: 'Drinks', imageId: 'drink-3' },
  { id: '10', name: 'Shea Butter Soap Bar', category: 'Essentials', imageId: 'essential-1' },
  { id: '11', name: 'All-Purpose Cleaner', category: 'Essentials', imageId: 'essential-2' },
  { id: '12', name: 'Lavender Home Candle', category: 'Essentials', imageId: 'essential-3' },
];
