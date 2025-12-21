export interface ProductImageType {
  src: string;
  alt: string;
  _id: string;
}

export interface ProductType {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  stockQuantity: number;
  images: ProductImageType[];
  createdAt: string;
  updatedAt: string;
  discountPercentage: number;
}
