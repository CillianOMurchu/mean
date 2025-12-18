export interface ProductImage {
  src: string;
  alt: string;
}

export interface ProductType {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  stockQuantity: number;
  images: ProductImage[];
  createdAt: string;
  updatedAt: string;
}
